import {defineStore} from "pinia";
import {onMounted, onUnmounted, reactive, watch} from "vue";
import {useMessage} from "naive-ui";
import http from "@/utils/http";

export const usePlayer = defineStore('player', () => {


    const player = reactive({
        audio: new Audio(),
        loopType: 0,//循环模式
        volume: 60,//音量
        playList: [],//播放列表
        id: 0,
        url: '',
        song: {} as Song,
        isPlaying: false, //是否播放中
        isPause: false,//是否暂停
        sliderInput: false,//是否正在拖动进度条
        muted: false,
        currentTime: 0,//当前播放时间
        duration: 0,//总播放时长
    })
    const message = useMessage()

    function init() {
        player.audio.muted = player.muted
        player.audio.volume = player.volume / 100
    }

    //音乐详情
    watch(() => player.id, id => {
        songDetail()
    })

    async function songDetail() {
        const detail = await http.get<{ songs: Song[] }>('/song/detail', {ids: player.id})
        player.song = detail.songs[0]
    }

    //播放歌曲
    async function play(id: number) {

        const url = await http.get<{ data: SongUrl[] }>('/song/url', {id: id})
        player.url = url.data[0].url
        player.id = id;
        player.audio.src = player.url;
        player.audio.play().then(res => {
            player.isPlaying = true
        }).catch(res => {
            message.error('播放失败:' + res)
        })

    }

    //下一曲
    function next() {
        play(1909651843)
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
    }

    let timer: NodeJS.Timeout

    onMounted(() => {
        init()
        timer = setInterval(() => {
            if (player.isPlaying && !player.sliderInput) {
                player.currentTime = parseInt(player.audio.currentTime.toString());
                player.duration = parseInt(player.audio.duration.toString());
            }

        }, 1000)
    })


    onUnmounted(() => {
        clearInterval(timer)
    })


    return {
        player,
        next,
        prev,
        togglePlay,
        toggleLoop,
        setCurrentTime,
        setVolume,
        dragEnd,
    }
})
