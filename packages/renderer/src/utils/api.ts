import http from "@/utils/http";

export async function useSongUrl(id: number) {
    const {data} = await http.get<{ data: SongUrl[] }>('/song/url', {id: id})
    return data.first()
}

export async function useDetail(id: number) {
    const {songs} = await http.get<{ songs: Song[] }>('/song/detail', {ids: id})
    return songs.first()
}

export async function useBanner() {
    const {banners} = await http.get<{ banners: Banner[] }>('/banner', {type: 1})
    return banners
}

export async function usePersonalized() {
    const {result} = await http.get<{ result: Personalized[] }>('/personalized')
    return result
}

export async function usePersonalizedNewSong() {
    const {result} = await http.get<{ result: PersonalizedNewSong[] }>('/personalized/newsong')
    return result
}

export async function usePlayListDetail(id: number, s: number = 8) {
    const {playlist} = await http.get<{ playlist: PlayListDetail }>('/playlist/detail', {id: id, s: s})
    const {songs} = await http.get<{ songs: Song[] }>('playlist/track/all', {id: id})
    return {playlist, songs}
}

export async function usePlayListTrackAll() {

}
