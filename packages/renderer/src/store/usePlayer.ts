import {defineStore} from "pinia";
import {onMounted, onUnmounted, reactive, watch} from "vue";
import {useMessage} from "naive-ui";
import {useDetail, useSongUrl} from "@/utils/api";

export const usePlayer = defineStore('player', () => {


    const player = reactive({
        audio: new Audio(),
        loopType: 0,//循环模式
        volume: localStorage.getItem('PLAYER-VOLUME')?.toInt() || 60,//音量
        playList: [],//播放列表
        id: 0,
        url: '',
        songUrl: {} as SongUrl,
        song: {} as Song,
        isPlaying: false, //是否播放中
        isPause: false,//是否暂停
        sliderInput: false,//是否正在拖动进度条
        muted: false,//是否静音
        currentTime: 0,//当前播放时间
        duration: 0,//总播放时长
    })


    function init() {
        player.audio.muted = player.muted
        player.audio.volume = player.volume / 100
        player.audio.loop = true
    }

    //音乐详情
    watch(() => player.id, async id => {
        await songDetail()
    })

    async function songDetail() {
        player.song = await useDetail(player.id)
    }

    //播放歌曲
    async function play(id: number) {
        if (id == player.id) return;
        player.isPlaying = false
        player.id = id;
        const data = await useSongUrl(id)
        player.songUrl = data
        player.url = data.url
        player.id = id;
        player.audio.src = player.url;
        player.audio.play().then(res => {
            player.isPlaying = true
        }).catch(res => {
            const message = useMessage()
            message.error('播放失败:' + res)
        })

    }

    //下一曲
    async function next() {
        await play(1909651843)
    }

    //上一曲
    function prev() {
    }

    //播放、暂停
    function togglePlay() {
        player.isPlaying = !player.isPlaying
        if (!player.isPlaying) {
            player.audio.pause();
            player.isPause = true
        } else {
            player.audio.play();
            player.isPause = false
        }
    }

    //切换循环类型
    function toggleLoop() {
        if (player.loopType == 2) {
            player.loopType = 0;
        } else {
            player.loopType++;
        }
    }

    /**
     * 静音切换
     */
    function toggleMuted() {
        player.muted = !player.muted
        player.audio.muted = player.muted
    }

    //设置播放时间
    function setCurrentTime(n: number) {
        if (player.sliderInput) return
        player.audio.currentTime = n
        player.sliderInput = false
    }

    function dragEnd() {
        player.sliderInput = false
        setCurrentTime(player.currentTime)
    }

    function setVolume(n: number) {
        n = n > 100 ? 100 : n
        n = n < 0 ? 0 : n
        player.volume = n
        player.audio.volume = n / 100
        localStorage.setItem('PLAYER-VOLUME', n.toString())
    }

    let timer: NodeJS.Timeout

    onMounted(() => {
        console.log('onMounted')
        init()
        timer = setInterval(() => {
            if (player.isPlaying && !player.sliderInput) {
                player.currentTime = parseInt(player.audio.currentTime.toString());
                player.duration = parseInt(player.audio.duration.toString());
            }

        }, 1000)
    })


    onUnmounted(() => {
        console.log('onUnmounted')
        clearInterval(timer)
    })


    return {
        player,
        play,
        next,
        prev,
        togglePlay,
        toggleLoop,
        setCurrentTime,
        setVolume,
        dragEnd,
        toggleMuted,
    }
})
