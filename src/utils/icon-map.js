/**
 * icon-map.js
 * A utility used to quickly and dynamically add icons to the site.
 */

import {
  SiBlender,
  SiCplusplus,
  SiCsharp,
  SiCss3,
  SiGatsby,
  SiGit,
  SiGithub,
  SiGraphql,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiLinkedin,
  SiNodeDotJs,
  SiNvidia,
  SiOpengl,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiUnity,
} from 'react-icons/si';

const IconMap = new Map([
  ['blender', <SiBlender css="color: #f98400;" />],
  ['c#', <SiCsharp css="color: #1c9c23;" />],
  ['c++', <SiCplusplus css="  color: #6496d3;" />],
  ['css', <SiCss3 css=" color: #016db6;" />],
  ['cuda', <SiNvidia css=" color: #8ac73e;" />],
  ['gatsby', <SiGatsby css=" color: #623298;" />],
  ['git', <SiGit css=" color: #EF512E;" />],
  ['github', <SiGithub />],
  ['graphql', <SiGraphql css=" color: #dd3187;" />],
  ['html', <SiHtml5 css=" color: #e6712b;" />],
  ['instagram', <SiInstagram />],
  ['javascript', <SiJavascript css="color: #eddb4b;" />],
  ['js', <SiJavascript css=" color: #eddb4b;" />],
  ['linkedin', <SiLinkedin />],
  ['node', <SiNodeDotJs css=" color: #8dc445;" />],
  ['opengl', <SiOpengl css="color: #5884a1;" />],
  ['react', <SiReact tcss="color: #5cdbfb;" />],
  ['redux', <SiRedux css=" color: #6e47a4;" />],
  ['tailwind', <SiTailwindcss css="color: #2194c3;" />],
  ['unity', <SiUnity css="color: #1d2731;" />],
]);

const Icon = ({ icon, className }) => {
  icon = icon.toLowerCase();
  if (IconMap.get(icon) == null) {
    return null;
  } else {
    return IconMap.get(icon);
  }
};

export default Icon;
