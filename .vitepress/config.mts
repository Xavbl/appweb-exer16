
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "tp1",
  description: "tp1",
  base: '/appweb-exer16/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Xavier Breton-L`Italien', link: '../thomas-martinmeunier.md' },
          { text: 'Thomas Martin-Meunier', link: '../xavier-bretonlitalien.md' }
        ]
      }
    ],
  }
})

function defineConfig(arg0: {
  title: string; description: string; base: string; themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: { text: string; link: string; }[]; sidebar: { text: string; items: { text: string; link: string; }[]; }[];
  };
}) {
  return 1;
}

