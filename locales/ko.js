export default {
  header: {
    brands: 'KuriyamaBot',
    home: 'Home',
    kuriyamabot: 'KuriyamaBot',
    functions: '기능들',
    commands: '명령어',
    chatcommands: 'Chat Command',
    admins: '어드민 기능',
    inlinequery: 'Inline Query',
    server: '구동 환경',
    kaorukobot: 'KaorukoBot',
    changelang: '언어 변경'
  },
  footer: {
    copyright: 'Copyright 2018. 달보드레 all rights reserved.'
  },
  sidebar: {
    home: 'Home',
    introduce: 'Introduce',
    bot: 'KuriyamaBot',
    functions: 'Functions',
    command: '명령어',
    chatCommand: 'Chat Command',
    admin: '어드민 기능',
    inline: 'Inline Query',
    env: 'Environment',
    server: '구동 환경',
    discord: 'Discord',
    kaorukoBot: 'KaorukoBot'
  },
  index: {
    hello: '안녕하세요. 쿠리야마 미라이입니다.',
    telegram: 'KuriyamaBot',
    telegramTest: 'Beta Test',
    git: 'KuriyamaBot'
  },
  introduce: {
    content:
`### 안녕하세요. 쿠리야마 미라이입니다.

**이 봇은 제가 쓰던 어떤 봇을 대체하기 위해서 만들어진 새로운 봇입니다.**

쿠리야마 미라이는 경계의 저편에 등장하는 캐릭터입니다.
캐릭터의 저작권은 원작자 및 Kyoto Animation crop 에 있습니다.

**\#PrayForKyoAni**
`,
    git: 'Explore to KuriyamaBot'
  },
  running: {
    env: '쿠리야마봇 구동환경'
  },
  kaorukobot: {
    content:
`### "아바바바바바바바바바바"

카오루코봇은 쿠리야마봇의 디스코드 이식판으로, **현재 제작중**입니다.
모에타 카오루코는 코믹 걸즈에 등장하는 캐릭터입니다.

캐릭터의 저작권은 원작자 및 Nexus 에 있습니다.`
  },
  functions: {
    index: {
      command: {
        title: '명령어',
        content: '쿠리야마봇의 명령어를 소개합니다!'
      },
      chatCommand: {
        title: 'Chat Command',
        content: '쿠리야마만의 Chat Command를 소개합니다!'
      },
      admin: {
        title: '어드민 기능',
        content: '쿠리야마봇의 어드민 기능을 소개합니다!'
      },
      inline: {
        title: 'Inline Query',
        content: '쿠리야마봇의 Inline Query 기능을 소개합니다.'
      },
      go: '바로가기!'
    },
    admins: {
      welcome: {
        header: '입장메세지를 정할 수 있는 명령어',
        content: 
`
쿠리야마봇의 입장메세지를 정할 수 있는 명령어입니다.

봇과 1:1로 대화할 때에는 사용할 수 없는 명령어입니다.

그룹, 슈퍼그룹에서는 그룹의 입장메세지를 설정합니다. 이 때에는 그룹의 관리자만 이 명령어를 이용할 수 있습니다.


##### 사용법

\`\`\`
/welcome {roomid}에 어서오세요! {userid}님!
\`\`\`

##### 입장메세지 끄기

\`\`\`
/welcome off
\`\`\`
`
      },
      leave: {
        header: '퇴장메세지를 정할 수 있는 명령어',
        content: 
`
쿠리야마봇의 퇴장메세지를 정할 수 있는 명령어입니다.

봇과 1:1로 대화할 때에는 사용할 수 없는 명령어입니다.

그룹, 슈퍼그룹에서는 그룹의 입장메세지를 설정합니다. 이 때에는 그룹의 관리자만 이 명령어를 이용할 수 있습니다.

##### 사용법

\`\`\`
/leave {userid}님이 {roomid}에서 나가셨습니다.
\`\`\`

##### 퇴장메세지 끄기

\`\`\`
/leave off
\`\`\`
`
      },
      lang: {
        header: '봇의 언어를 설정할 수 있는 명령어',
        content:
`
쿠리야마봇의 언어를 정할 수 있는 명령어입니다.

봇과 1:1로 대화할 때에는 본인의 언어를 설정합니다.

그룹, 슈퍼그룹에서는 그룹의 언어를 설정합니다. 이 때에는 그룹의 관리자만 이 명령어를 쓸 수 있습니다.

##### 사용법

\`\`\`
/lang
\`\`\`
`
      }
    },
    chatcommands: {
      img: {
        header: '채팅과 섞어 이미지를 검색하는 명령어',
        content: 
`
채팅과 섞어쓸 수 있는 구글에서 이미지를 검색하는 명령어입니다.

##### 사용법

\`\`\`
{img ReLU}
\`\`\`
`
      },
      search: {
        header: '채팅과 섞어 구글에 검색하는 명령어',
        content:
`
채팅과 섞어쓸 수 있는 구글에 검색할 수 있는 명령어입니다.

##### 사용법

\`\`\`
{search 크레브스 회로}
\`\`\`
`
      }
    },
    commands: {
      start: {
        header: '봇을 시작하는 명령어',
        content: 
`
쿠리야마봇과 처음 마주하면 쓰는 명령어입니다.

##### 사용법

\`\`\`
/start
\`\`\`
`
      },
      help: {
        header: '도움말을 볼 수 있는 명령어',
        content: 
`
쿠리야마봇에 있는 명령어들의 도움말을 볼 수 있습니다.

##### 사용법

\`\`\`
/help
\`\`\`
`
      },
      img: {
        header: '이미지를 검색하는 명령어',
        content: 
`
구글에서 이미지를 검색하는 명령어입니다.

##### 사용법

\`\`\`
/짤 사건의 지평선
\`\`\`
`
      },
      search: {
        header: '구글에 검색하는 명령어',
        content: 
`
구글에 검색할 수 있는 명령어입니다.

##### 사용법

\`\`\`
/검색 Vue.js
\`\`\`
`
      },
      uptime: {
        header: '작동시간 보는 명령어',
        content: 
`
쿠리야마봇이 작동된 시간을 확인할 수 있습니다.

##### 사용법

\`\`\`
/uptime
\`\`\`
`
      },
      lang: {
        header: '사용할 언어를 바꾸는 명령어',
        content: 
`
이 봇에서 사용할 언어를 바꿉니다.

##### 사용법

\`\`\`
/lang
\`\`\`
`
      },
      me: {
        header: '자신의 정보를 보는 명령어',
        content: 
`
자신의 정보를 볼 수 있는 명령어입니다.

##### 사용법

\`\`\`
/me
\`\`\`
`
      },
      whatanime: {
        header: '스크린샷으로 애니메이션 검색',
        content:
`
애니메이션의 스크린샷으로 무슨 애니메이션인지 찾아볼 수 있습니다.

[trace.moe](https://trace.moe/)의 API를 사용합니다.

**일본 애니메이션의 전체 스크린샷만 검색을 지원합니다.**

##### 사용법

\`\`\`
/무슨애니
\`\`\`
`
      },
      msginfo: {
        header: '메세지 디버깅 명령어',
        content: 
`
메세지의 정보를 볼 수 있습니다.

##### 사용법

\`\`\`
/msginfo
\`\`\`
`
      },
      homepage: {
        header: '홈페이지로 이동하기!',
        content: 
`
쿠리야마봇의 홈페이지로 이동할 수 있습니다.

##### 사용법

\`\`\`
/homepage
\`\`\`
`
      },
      weather: {
        header: '날씨정보 찾아보기!',
        content: 
`
원하는 지역의 날씨를 찾아볼 수 있습니다.

##### 사용법

\`\`\`
/weather
\`\`\`

\`\`\`
/weather 세종시
\`\`\`
`
      },
      calculate: {
        header: '순식간에 계산을?',
        content:
`
원하는 수식을 계산할 수 있습니다.


##### 사용법

\`\`\`
/calc 1/sin(pi/2)
\`\`\`
`
      },
      translate: {
        header: '원하는 메세지를 번역하는 명령어',
        content: 
`
원하는 메세지나 글귀를 번역할 수 있습니다.


##### 사용법

\`\`\`
/tr 어서오세요|en
\`\`\`
`
      }
    },
    inline: {
      img: {
        header: '이미지를 검색하는 명령어',
        content: 
`
구글에서 이미지를 검색하는 명령어입니다.

##### 사용법

\`\`\`
@kuriyamabot img 사건의 지평선
\`\`\`
`
      },
      search: {
        header: '구글에 검색하는 명령어',
        content: 
`
구글에 검색할 수 있는 명령어입니다.

##### 사용법

\`\`\`
@kuriyamabot search Vue.js
\`\`\`
`
      },
      youtube: {
        header: '유튜브에 검색하는 명령어',
        content: 
`
유튜브에서 동영상을 검색할 수 있는 명령어입니다.

##### 사용법

\`\`\`
@kuriyamabot youtube Rainbow Six Siege
\`\`\`
`
      },
      help: {
        header: '도움말을 볼 수 있는 명령어',
        content: 
`
Inline Command의 도움말을 볼 수 있는 명령어입니다.

##### 사용법

\`\`\`
@kuriyamabot help
\`\`\`
`
      }
    }
  },
  OG: {
    index: {
      siteName: 'KuriyamaBot',
      desc: '쿠리야마봇 홈페이지입니다.'
    },
    introduce: {
      siteName: 'Introduce :: KuriyamaBot',
      desc: '쿠리야마봇을 소개하는 페이지입니다.'
    },
    kaorukobot: {
      siteName: 'KaorukoBot :: KuriyamaBot',
      desc: '쿠리야마봇의 디스코드 이식판, 카오루코봇을 소개하는 페이지입니다.'
    },
    running: {
      siteName: 'Running :: KuriyamaBot',
      desc: '쿠리야마봇의 구동환경을 소개하는 페이지입니다.'
    },
    functions: {
      index: {
        siteName: 'Functions :: KuriyamaBot',
        desc: '쿠리야마봇의 기능을 소개하는 페이지입니다.'
      },
      admins: {
        siteName: 'Admins :: Functions :: KuriyamaBot',
        desc: '쿠리야마봇의 어드민 기능을 소개하는 페이지입니다.'
      },
      chatcommands: {
        siteName: 'ChatCommands :: Functions :: KuriyamaBot',
        desc: '쿠리야마봇의 Chat Command 기능을 소개하는 페이지입니다.'
      },
      commands: {
        siteName: 'Commands :: Functions :: KuriyamaBot',
        desc: '쿠리야마봇의 명령어를 소개하는 페이지입니다.'
      },
      inline: {
        siteName: 'Inline Queries :: Functions :: KuriyamaBot',
        desc: '쿠리야마봇의 Inline Query 기능을 소개하는 페이지입니다.'
      }
    }
  },
  not_found: {
    content: "없는 페이지입니다.",
    button: "홈페이지로!"
  }
}
