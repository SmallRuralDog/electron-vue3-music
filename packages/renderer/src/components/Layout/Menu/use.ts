import {ref, watch} from "vue";
import {SoundSource24Filled, Heart20Filled, Desktop20Filled, ArrowCircleDown20Filled, Timer28Filled} from "@vicons/fluent";
import {StarsSharp} from "@vicons/material";
import {Music, Video} from "@vicons/tabler";
import {useRoute, useRouter} from "vue-router";

interface IMenu {
    name: string;
    key: string;
    icon: any;
}

interface IMenus {
    name: string,
    menus: IMenu[],
}

export function userMenu() {
    const menus: IMenus[] = [
        {
            name: "在线音乐",
            menus: [
                {
                    name: "推荐",
                    key: "discover",
                    icon: StarsSharp,
                },
                {
                    name: "音乐馆",
                    key: "music",
                    icon: Music,
                },
                {
                    name: "视频",
                    key: "video",
                    icon: Video,
                },
                {
                    name: "电台",
                    key: "broadcast",
                    icon: SoundSource24Filled,
                },
            ]
        },
        {
            name: "我的音乐",
            menus: [
                {
                    name: "我喜欢",
                    key: "discover",
                    icon: Heart20Filled,
                },
                {
                    name: "本地歌曲",
                    key: "music",
                    icon: Desktop20Filled,
                },
                {
                    name: "下载歌曲",
                    key: "video",
                    icon: ArrowCircleDown20Filled,
                },
                {
                    name: "最近播放",
                    key: "broadcast",
                    icon: Timer28Filled,
                },
            ]
        }
    ];

    const route = useRoute();

    const currentKey = ref(route.meta.menu);

    const router = useRouter();

    watch(
        () => route.meta.menu,
        (menu) => {
            currentKey.value = menu;
        }
    );

    const click = (menu: IMenu) => {
        router.push({name: menu.key});
    };

    return {
        menus,
        click,
        currentKey,
    };
}
