<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  import heroLogo from '$lib/assets/images/LCL_hero_dark.png';
  import arrowUpIcon from '$lib/assets/icons/angles-up-solid.svg?raw';
  import locationIcon from '$lib/assets/icons/location-dot-solid.svg';
  import githubIcon from '$lib/assets/icons/github-dark.svg?raw';
  import lclIcon from '$lib/assets/icons/LCL_logo_pure_dark.svg';
  import projectOJ3 from '$lib/assets/images/lcl-project-logo-oj3.png';
  import projectSBS from '$lib/assets/images/lcl-project-logo-sbs.png';
  import projectTyping from '$lib/assets/images/lcl-project-logo-typing.png';
  import projectACMSS from '$lib/assets/images/lcl-project-logo-acmss.png';
  import avatarBLF2 from '$lib/assets/images/gh-avatar-BLF2.jpeg';
  import avatarArvin from '$lib/assets/images/gh-avatar-Arvin.jpeg';
  import avatarMeiK from '$lib/assets/images/gh-avatar-MeiK.png';
  import avatarbLue from '$lib/assets/images/gh-avatar-bLue.jpeg';
  import avatarmushan from '$lib/assets/images/gh-avatar-mushan.jpeg';
  import avatarsuyu from '$lib/assets/images/gh-avatar-suyu.jpeg';
  import avatarduzhuo from '$lib/assets/images/gh-avatar-duzhuo.jpeg';

  const handleStackHScroll = (e) => {
    const target = e.target;
    const value = +e.detail.value;
    if (value === 1) {
      target.classList.add('stack-h-highlight');
    } else {
      target.classList.remove('stack-h-highlight');
    }
  };

  onMount(() => {
    document.querySelectorAll('[data-tg-name=tg-stack-h-scroll]').forEach((e) => {
      e.addEventListener('tg', handleStackHScroll);
    });
    // @ts-ignore
    const src = window.triggerScriptUrl as string;
    const scriptEle = document.createElement('script');
    scriptEle.type = 'text/javascript';
    scriptEle.async = true;
    scriptEle.onload = function () {
      console.log('[系统] 开始跃迁...');
    };
    scriptEle.src = src;
    document.body.appendChild(scriptEle);
    setTimeout(() => {
      console.log('[系统] 准备跃迁引擎...');
    }, 0);
  });

  let projects = [
    {
      logo: projectOJ3,
      name: 'SDUT OJ 3',
      intro: `<span>第三代在线评测系统，2018 年发布。</span>
        <span
          >其使用全栈同构技术栈开发，结合自研的次世代评测机
          River，轻松服务近千人的大型比赛。</span
        >`,
      link: 'https://acm.sdut.edu.cn/onlinejudge3/',
    },
    {
      logo: projectSBS,
      name: '训练计划',
      intro: `<span
          >训练计划是一个典型的侧重爬虫的 Web 项目，现已服务 20 余所国内高校。学生可参考题单在不同平台练习和跟进进度。</span
        >`,
      link: 'https://stepbystep.sdutacm.cn/',
    },
    {
      logo: projectTyping,
      name: '打字系统',
      intro: `<span
          >帮助集训队同学进行打字训练，提供比赛和练习功能。</span
        >`,
      link: 'http://typing2.sdutacm.cn/',
    },
    {
      logo: projectACMSS,
      name: 'ACM 赛事',
      intro: `<span
          >SDUTACM 团队作为国内榜单汇总的先驱者，acmss 曾是业界选手的重要参考。</span
        >`,
      link: 'https://acm.sdut.edu.cn/acmss/',
    },
    //   {
    //     logo: projectLOC,
    //     name: 'LOC',
    //     intro: `<span
    //         >基于大数据处理的代码统计分析平台。</span
    //       >`,
    //     link: 'https://acm.sdut.edu.cn/loc/',
    //   },
  ];

  let characters = [
    {
      avatar: avatarBLF2,
      name: 'BLF2',
      github: 'https://github.com/BLF2',
      class: '13 级软件',
      company: '众安',
      introHtml: `<p>506 元老级人物</p>
        <p>拥有丰富的开发、运维等相关经验</p>
        <p>支持过多届校赛及 ACM 训练</p>`,
    },
    {
      avatar: avatarArvin,
      name: 'Arvin',
      github: 'https://github.com/Arvintian',
      class: '14 级计科',
      company: '新浪',
      introHtml: `<p>506 元老级人物</p>
        <p>SDUT OnlineJudge 2 平台开发者</p>
        <p>擅长 Python 等语言，精通软件开发、运维等</p>
        <p>拥有丰富的云计算、分布式等相关经验</p>
        <p>开源多款 Web 框架和云相关框架</p>
        <p>支持过多届校赛及周边系统</p>`,
    },
    {
      avatar: avatarMeiK,
      name: 'MeiK',
      github: 'https://github.com/MeiK2333',
      class: '15 级软件',
      company: '华为',
      active: true,
      introHtml: `<p>506 长者</p>
        <p>业界 TOP 1 评测机作者</p>
        <p>训练计划平台开发者</p>
        <p>擅长 Python、Rust 等语言，精通软件开发、UNIX、运维等</p>
        <p>拥有丰富的云计算、操作系统、爬虫等相关经验</p>
        <p>支持过多届校赛及 ACM 周边系统</p>`,
    },
    {
      avatar: avatarbLue,
      name: 'bLue',
      github: 'https://github.com/dreamerblue',
      class: '15 级计科',
      company: '腾讯',
      active: true,
      introHtml: `<p>506 与 409 活跃街溜子，中等二次元浓度</p>
        <p>SDUT OnlineJudge 3 平台核心开发者</p>
        <p>开源组织 algoUX 核心成员</p>
        <p>擅长 JavaScript 及大前端技术栈，熟悉全栈开发</p>
        <p>拥有丰富的前端相关经验和设计心得</p>
        <p>策划和支持过多届校赛，参与开发 ACM 周边系统</p>`,
    },
    {
      avatar: avatarmushan,
      name: 'mushan',
      github: 'https://github.com/mushan-zb',
      class: '16 级软件',
      company: '字节跳动',
      active: true,
      introHtml: `<p>506 核心成员</p>
        <p>开源组织 algoUX 核心成员</p>
        <p>擅长 Go、Python 等语言，精通 Web 开发</p>
        <p>拥有丰富的后端、爬虫等相关经验</p>
        <p>支持过多届校赛及 ACM 周边系统</p>
        <p>为 CCPC 组委会提供多次技术支持</p>`,
    },
    {
      avatar: avatarsuyu,
      name: 'suyu',
      github: 'https://github.com/suyu8023',
      class: '16 级计科',
      company: '格灵深瞳',
      introHtml: `<p>506 核心成员</p>
        <p>打字系统开发者</p>
        <p>擅长 JavaScript，精通 Web 开发</p>
        <p>拥有丰富的前端相关经验</p>
        <p>支持过多届校赛及 ACM 周边系统</p>`,
    },
    {
      avatar: avatarduzhuo,
      name: 'duzhuo',
      github: 'https://github.com/acmduzhuo',
      class: '17 级计科',
      company: '快手',
      introHtml: `<p>506 核心成员</p>
        <p>擅长 JavaScript，精通 Web 开发</p>
        <p>拥有丰富的前端相关经验</p>
        <p>支持过多届校赛及 ACM 周边系统</p>`,
    },
  ];
</script>

<div class="hero lg:px-8 select-none" style="min-height: 85vh">
  <div class="hero-content flex-col lg:flex-row lg:gap-12">
    <img alt="Light Cone Lab logo" src={heroLogo} class="max-w-xs lg:max-w-sm" />
    <div class="flex flex-col justify-center lg:items-start">
      <div class="inline-block w-fit mx-auto lg:mx-0">
        <h1 class="text-3xl text-center lg:text-5xl 2xl:text-7xl font-bold">SDUTACM 光锥实验室</h1>
        <div class="divider text-base-content text-opacity-60">TECH CHANGES THE FATE</div>
      </div>
      <p class="pt-12 text-secondary text-lg 2xl:text-2xl font-bold">
        或许是 SDUT 最好的技术驱动型组织。
      </p>
      <p class="pt-8">
        在这里，有一群热爱技术的小伙伴。<span class="whitespace-nowrap">我们</span><span
          class="whitespace-nowrap">专注于</span
        ><span class="whitespace-nowrap">创造</span><span class="whitespace-nowrap">各种</span><span
          class="whitespace-nowrap">好玩的</span
        ><span class="whitespace-nowrap">东西。</span>
      </p>
      <p class="pt-4">
        无论是算法相关，<span class="whitespace-nowrap">还是</span>
        <span class="whitespace-nowrap">Web 开发、</span><span class="whitespace-nowrap"
          >云计算</span
        ><span class="whitespace-nowrap">或</span><span class="whitespace-nowrap">爬虫</span><span
          class="whitespace-nowrap">等，</span
        ><span class="whitespace-nowrap">都是</span><span class="whitespace-nowrap">我们的</span
        ><span class="whitespace-nowrap">拿手</span><span class="whitespace-nowrap">好戏。</span>
      </p>
      <p class="pt-8 inline-flex items-center justify-center">
        <img alt="Location" src={locationIcon} class="w-5 h-5" /><span class="ml-1">9#506</span>
      </p>
    </div>
  </div>
</div>
<div class="flex flex-col items-center" style="min-height: 15vh">
  <div class="arrow-up pt-8" data-tg-name="tg-arrow-up-scroll" data-tg-from="1" data-tg-to="-1">
    {@html arrowUpIcon}
  </div>
</div>

<div class="min-h-screen flex flex-col items-center justify-center stack-block relative">
  <h1
    class="text-5xl md:text-7xl lg:text-8xl lg:scale-105 2xl:text-9xl 2xl:scale-110 font-bold"
    data-tg-name="_"
    data-tg-ref="stack-h-container"
    data-tg-from="0"
    data-tg-to="10"
    data-tg-step="1"
    data-tg-map="0...10: 1"
  >
    <span
      id="stack-h-c1"
      class="stack-h"
      data-tg-name="tg-stack-h-scroll"
      data-tg-map="0...2: 0; 3...10: 1"
      data-tg-follow="stack-h-container">学</span
    >
    <span
      id="stack-h-c2"
      class="stack-h"
      data-tg-name="tg-stack-h-scroll"
      data-tg-map="0...3: 0; 4...10: 1"
      data-tg-follow="stack-h-container">你</span
    >
    <span
      id="stack-h-c3"
      class="stack-h"
      data-tg-name="tg-stack-h-scroll"
      data-tg-map="0...4: 0; 5...10: 1"
      data-tg-follow="stack-h-container">所</span
    >
    <span
      id="stack-h-c4"
      class="stack-h"
      data-tg-name="tg-stack-h-scroll"
      data-tg-map="0...5: 0; 6...10: 1"
      data-tg-follow="stack-h-container">想</span
    >
  </h1>

  <h2
    id="stack-w-w1"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-1"
    data-tg-from="-1"
    data-tg-to="2"
  >
    前端
  </h2>
  <h2
    id="stack-w-w2"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-2"
    data-tg-from="-1"
    data-tg-to="2"
  >
    后端
  </h2>
  <h2
    id="stack-w-w3"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-3"
    data-tg-from="-1"
    data-tg-to="2"
  >
    爬虫
  </h2>
  <h2
    id="stack-w-w4"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-4"
    data-tg-from="-1"
    data-tg-to="2"
  >
    全栈开发
  </h2>
  <h2
    id="stack-w-w5"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-5"
    data-tg-from="-1"
    data-tg-to="2"
  >
    交互设计
  </h2>
  <h2
    id="stack-w-w6"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-6"
    data-tg-from="-1"
    data-tg-to="2"
  >
    数据库
  </h2>
  <h2
    id="stack-w-w7"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-7"
    data-tg-from="-1"
    data-tg-to="2"
  >
    微服务
  </h2>
  <h2
    id="stack-w-w8"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-8"
    data-tg-from="0"
    data-tg-to="2"
  >
    分布式
  </h2>
  <h2
    id="stack-w-w9"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-9"
    data-tg-from="0"
    data-tg-to="2"
  >
    云原生
  </h2>
  <h2
    id="stack-w-w10"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-10"
    data-tg-from="0"
    data-tg-to="2"
  >
    Serverless
  </h2>
  <h2
    id="stack-w-w11"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-11"
    data-tg-from="0"
    data-tg-to="2"
  >
    Web 安全
  </h2>
  <h2
    id="stack-w-w12"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-12"
    data-tg-from="0"
    data-tg-to="1.5"
  >
    服务器运维
  </h2>
  <h2
    id="stack-w-w13"
    class="stack-w"
    data-tg-name="tg-stack-w-scroll-13"
    data-tg-from="-1"
    data-tg-to="2"
  >
    软件工程
  </h2>
</div>

<div class="min-h-screen flex flex-col items-center justify-center project-block py-24">
  <h1 class="text-3xl lg:text-4xl font-bold mb-8 select-none">我们的项目</h1>
  <div class="px-4 lg:px-12">
    {#each projects as project, index}
      <div
        id={`project-${index}`}
        class="project card lg:card-side mt-6 lg:mt-12 lg:max-h-80 glass shadow-xl"
        data-tg-name={`tg-project-scroll-${index}`}
        data-tg-from="0"
        data-tg-to="2"
      >
        <figure>
          <img src={project.logo} alt={`Project Logo of ${project.name}`} />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-2xl lg:text-4xl mb-4 lg:mb-8 select-none">{project.name}</h2>
          <p class="project-intro">
            {@html project.intro}
          </p>
          <div class="card-actions justify-end mt-1">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <button class="btn btn-primary">前往</button>
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="min-h-screen flex flex-col items-center justify-center character-intro-block py-24">
  <h1 class="text-3xl lg:text-4xl font-bold mb-8 select-none">实验室知名学长学姐</h1>
  <div class="px-4 lg:px-12">
    {#each characters as character, index}
      <div
        id={`character-${index}`}
        class="character flex mt-8 lg:mt-16 character-indent-{3 - Math.abs(index - 3)}"
        data-tg-name={`tg-character-scroll-${index}`}
        data-tg-from="-0.5"
        data-tg-to="2"
      >
        <img
          alt={`avatar of ${character.name}`}
          src={character.avatar}
          class="rounded-full w-16 h-16 lg:w-32 lg:h-32"
        />
        <div class="ml-4 lg:ml-8">
          <p>
            <span class="font-bold text-2xl">{character.name}</span><span
              >（{character.class}）</span
            ><span>@ {character.company}</span>
            {#if character.active}
              <span class="badge badge-secondary badge-outline select-none ml-2">活跃</span>
            {/if}
          </p>
          <p class="mt-2">
            <button
              class="btn-xs btn-circle border-2 border-transparent hover:border-secondary-focus transition svg-icon-primary"
              ><a href={character.github} target="_blank" rel="noopener noreferrer"
                >{@html githubIcon}</a
              ></button
            >
          </p>
          <div class="text-base-content text-opacity-80 mt-4 character-intro-paras">
            {@html character.introHtml}
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<div class="min-h-screen flex flex-col items-center justify-center join-block py-24">
  <h1 class="text-3xl lg:text-4xl font-bold mb-8 select-none">加入我们</h1>
  <div class="px-4 lg:px-12">
    <h2 class="text-2xl lg:text-5xl text-center mt-8 lg:mt-16 select-none">
      2023 暑假集训即将开始！
    </h2>
    <div class="mt-12 flex flex-col lg:flex-row gap-8 justify-between">
      <div>
        <h3 class="text-2xl font-bold text-base-content text-opacity-75 mb-6">你需要满足：</h3>
        <ul>
          <li class="mb-2">1. 基本程序设计能力和数据结构知识</li>
          <li class="mb-2">2. 对任何相关技术的热情和好奇心</li>
          <li class="mb-2">3. 提问和解决问题的能力</li>
          <li class="mb-2">4. 愿意暑假留校</li>
        </ul>
      </div>
      <div>
        <h3 class="text-2xl font-bold text-base-content text-opacity-75 mb-6">你将收获：</h3>
        <ul>
          <li class="mb-2">1. 来自一线公司工作的学长的指导</li>
          <li class="mb-2">2. 前后端、爬虫、Git、云相关知识</li>
          <li class="mb-2">3. 多人协作，一起完成充满挑战的项目</li>
          <li class="mb-2">4. 项目上线、运营维护、持续迭代的经验</li>
        </ul>
      </div>
    </div>
    <div class="mt-12 lg:mt-16 mb-12 text-center">
      <a href="https://wj.qq.com/s2/12624172/b09f/" target="_blank" rel="noopener noreferrer"
        ><button class="btn btn-primary">立即报名</button></a
      >
    </div>
  </div>
</div>

<footer class="footer p-10 bg-base-200 text-base-content">
  <div>
    <img alt="LCL Logo" src={lclIcon} class="w-12 h-12" />
    <p>Light Cone Lab<br />© 2023 SDUTACM. All Rights Reserved.</p>
  </div>
  <div>
    <span class="footer-title">Links</span>
    <a
      href="https://github.com/sdutacm"
      target="_blank"
      rel="noopener noreferrer"
      class="link link-hover">GitHub</a
    >
    <a
      href="https://acm.sdut.edu.cn/"
      target="_blank"
      rel="noopener noreferrer"
      class="link link-hover">Official Site</a
    >
  </div>
  <div>
    <span class="footer-title">Co-organizations</span>
    <a href="https://algoux.org/" target="_blank" rel="noopener noreferrer" class="link link-hover"
      >algoUX</a
    >
  </div>
</footer>

<style lang="less">
  img {
    user-select: none;
  }

  .arrow-up {
    width: 30px;
    height: 30px;
    opacity: var(--tg-arrow-up-scroll);
  }

  .stack-block {
    user-select: none;

    :global(.stack-h.stack-h-highlight) {
      background-size: 100%;
      background-repeat: repeat;

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
    }

    --stack-h-gradient-bp-0: #33befb;
    --stack-h-gradient-bp-1: rgb(104, 139, 235);
    --stack-h-gradient-bp-2: rgb(105, 113, 228);
    --stack-h-gradient-bp-3: rgb(116, 77, 218);
    --stack-h-gradient-bp-4: #a01ed4;

    :global(#stack-h-c1.stack-h-highlight) {
      background-color: var(--stack-h-gradient-bp-0);
      background-image: linear-gradient(
        90deg,
        var(--stack-h-gradient-bp-0),
        var(--stack-h-gradient-bp-1)
      );
    }
    :global(#stack-h-c2.stack-h-highlight) {
      background-color: var(--stack-h-gradient-bp-1);
      background-image: linear-gradient(
        90deg,
        var(--stack-h-gradient-bp-1),
        var(--stack-h-gradient-bp-2)
      );
    }
    :global(#stack-h-c3.stack-h-highlight) {
      background-color: var(--stack-h-gradient-bp-2);
      background-image: linear-gradient(
        90deg,
        var(--stack-h-gradient-bp-2),
        var(--stack-h-gradient-bp-3)
      );
    }
    :global(#stack-h-c4.stack-h-highlight) {
      background-color: var(--stack-h-gradient-bp-3);
      background-image: linear-gradient(
        90deg,
        var(--stack-h-gradient-bp-3),
        var(--stack-h-gradient-bp-4)
      );
    }

    .stack-w {
      @apply absolute text-sm lg:text-2xl 2xl:text-4xl text-base-content text-opacity-80;
    }

    #stack-w-w1 {
      @apply text-3xl lg:text-5xl 2xl:text-7xl;
      left: 20%;
      top: 25%;
      opacity: var(--tg-stack-w-scroll-1, 0);
      transform: ~'translate(calc(40 * max(1 - max(var(--tg-stack-w-scroll-1, 0), 0), 0) * 1px), calc(40 * max(1 - max(var(--tg-stack-w-scroll-1, 0), 0), 0) * 1px))';
    }
    #stack-w-w2 {
      @apply text-3xl lg:text-5xl 2xl:text-7xl;
      right: 20%;
      top: 25%;
      opacity: var(--tg-stack-w-scroll-2, 0);
      transform: ~'translate(calc(-40 * max(1 - max(var(--tg-stack-w-scroll-2, 0), 0), 0) * 1px), calc(40 * max(1 - max(var(--tg-stack-w-scroll-2, 0), 0), 0) * 1px))';
    }
    #stack-w-w3 {
      @apply text-xl lg:text-2xl 2xl:text-4xl;
      right: 8%;
      top: 38%;
      opacity: var(--tg-stack-w-scroll-3, 0);
      transform: ~'translate(calc(-15 * max(1 - max(var(--tg-stack-w-scroll-3, 0), 0), 0) * 1px), calc(10 * max(1 - max(var(--tg-stack-w-scroll-3, 0), 0), 0) * 1px))';
    }
    #stack-w-w4 {
      @apply text-3xl lg:text-5xl 2xl:text-7xl;
      left: 42%;
      top: 6%;
      opacity: var(--tg-stack-w-scroll-4, 0);
      transform: ~'translate(calc(-8 * max(1 - max(var(--tg-stack-w-scroll-4, 0), 0), 0) * 1px), calc(40 * max(1 - max(var(--tg-stack-w-scroll-4, 0), 0), 0) * 1px))';
    }
    #stack-w-w5 {
      @apply text-xl lg:text-2xl 2xl:text-4xl;
      left: 10%;
      top: 15%;
      opacity: var(--tg-stack-w-scroll-5, 0);
      transform: ~'translate(calc(20 * max(1 - max(var(--tg-stack-w-scroll-5, 0), 0), 0) * 1px), calc(20 * max(1 - max(var(--tg-stack-w-scroll-5, 0), 0), 0) * 1px))';
    }
    #stack-w-w6 {
      @apply text-2xl lg:text-3xl 2xl:text-5xl text-base-content text-opacity-50;
      right: 4%;
      top: 52%;
      opacity: var(--tg-stack-w-scroll-6, 0);
      transform: ~'translate(calc(-20 * max(1 - max(var(--tg-stack-w-scroll-6, 0), 0), 0) * 1px), calc(-10 * max(1 - max(var(--tg-stack-w-scroll-6, 0), 0), 0) * 1px))';
    }
    #stack-w-w7 {
      @apply text-xl lg:text-2xl 2xl:text-4xl text-base-content text-opacity-50;
      left: 5%;
      top: 48%;
      opacity: var(--tg-stack-w-scroll-7, 0);
      transform: ~'translate(calc(20 * max(1 - max(var(--tg-stack-w-scroll-7, 0), 0), 0) * 1px), calc(10 * max(1 - max(var(--tg-stack-w-scroll-7, 0), 0), 0) * 1px))';
    }
    #stack-w-w8 {
      @apply text-3xl lg:text-4xl 2xl:text-6xl text-base-content text-opacity-70;
      left: 18%;
      bottom: 29%;
      opacity: var(--tg-stack-w-scroll-8, 0);
      transform: ~'translate(calc(20 * max(1 - max(var(--tg-stack-w-scroll-8, 0), 0), 0) * 1px), calc(-30 * max(1 - max(var(--tg-stack-w-scroll-8, 0), 0), 0) * 1px))';
    }
    #stack-w-w9 {
      @apply text-2xl lg:text-3xl 2xl:text-5xl text-base-content text-opacity-50;
      left: 49%;
      bottom: 20%;
      opacity: var(--tg-stack-w-scroll-9, 0);
      transform: ~'translate(calc(-6 * max(1 - max(var(--tg-stack-w-scroll-9, 0), 0), 0) * 1px), calc(-30 * max(1 - max(var(--tg-stack-w-scroll-9, 0), 0), 0) * 1px))';
    }
    #stack-w-w10 {
      @apply text-2xl lg:text-3xl 2xl:text-5xl text-base-content text-opacity-50;
      left: 12%;
      bottom: 12%;
      opacity: var(--tg-stack-w-scroll-10, 0);
      transform: ~'translate(calc(20 * max(1 - max(var(--tg-stack-w-scroll-10, 0), 0), 0) * 1px), calc(-20 * max(1 - max(var(--tg-stack-w-scroll-10, 0), 0), 0) * 1px))';
    }
    #stack-w-w11 {
      @apply text-2xl lg:text-3xl 2xl:text-5xl text-base-content text-opacity-50;
      right: 17%;
      bottom: 30%;
      opacity: var(--tg-stack-w-scroll-11, 0);
      transform: ~'translate(calc(-20 * max(1 - max(var(--tg-stack-w-scroll-11, 0), 0), 0) * 1px), calc(-30 * max(1 - max(var(--tg-stack-w-scroll-11, 0), 0), 0) * 1px))';
    }
    #stack-w-w12 {
      @apply text-lg lg:text-xl 2xl:text-3xl text-base-content text-opacity-40;
      right: 12%;
      bottom: 9%;
      opacity: var(--tg-stack-w-scroll-12, 0);
      transform: ~'translate(calc(-10 * max(1 - max(var(--tg-stack-w-scroll-12, 0), 0), 0) * 1px), calc(-16 * max(1 - max(var(--tg-stack-w-scroll-12, 0), 0), 0) * 1px))';
    }
    #stack-w-w13 {
      @apply text-2xl lg:text-3xl 2xl:text-5xl text-base-content text-opacity-50;
      right: 7%;
      top: 12%;
      opacity: var(--tg-stack-w-scroll-13, 0);
      transform: ~'translate(calc(-20 * max(1 - max(var(--tg-stack-w-scroll-13, 0), 0), 0) * 1px), calc(20 * max(1 - max(var(--tg-stack-w-scroll-13, 0), 0), 0) * 1px))';
    }
  }

  .project-block {
    .project {
      @media (min-width: 1024px) {
        max-width: 920px;

        figure {
          flex: 1;
        }

        .card-body {
          flex: initial;
          width: 360px;
        }
      }

      .project-intro {
        :global(span) {
          @apply block mb-2;

          &:last-child {
            @apply mb-0;
          }
        }
      }
    }

    #project-0 {
      opacity: var(--tg-project-scroll-0, 0);
      transform: ~'translateY(calc(100 * max(1 - var(--tg-project-scroll-0, 0), 0) * 1px))';
    }
    #project-1 {
      opacity: var(--tg-project-scroll-1, 0);
      transform: ~'translateY(calc(100 * max(1 - var(--tg-project-scroll-1, 0), 0) * 1px))';
    }
    #project-2 {
      opacity: var(--tg-project-scroll-2, 0);
      transform: ~'translateY(calc(100 * max(1 - var(--tg-project-scroll-2, 0), 0) * 1px))';
    }
    #project-3 {
      opacity: var(--tg-project-scroll-3, 0);
      transform: ~'translateY(calc(100 * max(1 - var(--tg-project-scroll-3, 0), 0) * 1px))';
    }
  }

  .character-intro-block {
    .character {
      .character-intro-paras {
        :global(p) {
          @apply mb-2;
        }
      }
      @media (min-width: 1024px) {
        &.character-indent-1 {
          margin-left: 4rem;
        }
        &.character-indent-2 {
          margin-left: 8rem;
        }
        &.character-indent-3 {
          margin-left: 12rem;
        }
      }
    }

    @media (min-width: 1024px) {
      #character-0 {
        opacity: var(--tg-character-scroll-0, 0);
        transform: ~'translateX(calc(-40 * max(1 - max(var(--tg-character-scroll-0, 0), 0), 0) * 1px))';
      }
      #character-1 {
        opacity: var(--tg-character-scroll-1, 0);
        transform: ~'translateX(calc(-40 * max(1 - max(var(--tg-character-scroll-1, 0), 0), 0) * 1px))';
      }
      #character-2 {
        opacity: var(--tg-character-scroll-2, 0);
        transform: ~'translateX(calc(-40 * max(1 - max(var(--tg-character-scroll-2, 0), 0), 0) * 1px))';
      }
      #character-3 {
        opacity: var(--tg-character-scroll-3, 0);
        transform: ~'translateX(calc(-40 * max(1 - max(var(--tg-character-scroll-3, 0), 0), 0) * 1px))';
      }
      #character-4 {
        opacity: var(--tg-character-scroll-4, 0);
        transform: ~'translateX(calc(40 * max(1 - max(var(--tg-character-scroll-4, 0), 0), 0) * 1px))';
      }
      #character-5 {
        opacity: var(--tg-character-scroll-5, 0);
        transform: ~'translateX(calc(40 * max(1 - max(var(--tg-character-scroll-5, 0), 0), 0) * 1px))';
      }
      #character-6 {
        opacity: var(--tg-character-scroll-6, 0);
        transform: ~'translateX(calc(40 * max(1 - max(var(--tg-character-scroll-6, 0), 0), 0) * 1px))';
      }
    }
  }
</style>
