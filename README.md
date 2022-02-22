# electron-vue3-music
## Run Setup

  ```bash
  # 启动API服务
  docker run -d -p 3000:3000 --name netease_cloud_music_api    binaryify/netease_cloud_music_api
  
  # clone the project
  git https://github.com/SmallRuralDog/electron-vue3-music.git

  # enter the project directory
  cd electron-vue3-music

  # install dependency
  pnpm i

  # develop
  pnpm run dev
  ```
