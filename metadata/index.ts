import type { Creator } from '../scripts/types/metadata'
import { getAvatarUrlByGithubName } from '../scripts/utils'

/** 文本 */
export const siteName = 'VacuoleBase'
export const siteShortName = 'VacuoleBase'
export const siteDescription = '记录回忆，知识和畅想的地方'

/** 文档所在目录 */
export const include = ['笔记']

/** Repo */
export const githubRepoLink = 'https://github.com/VacuolePaoo/VacuoleBase'
/** Discord */
export const discordLink = 'https://disboard.org/zh-cn/server/1273078781241987134'

/** 无协议前缀域名 */
export const plainTargetDomain = 'vacuole.top'
/** 完整域名 */
export const targetDomain = `https://${plainTargetDomain}`

/** 创作者 */
export const creators: Creator[] = [
  {
    name: 'VacuolePao',
    avatar: '/avatar.svg',
    username: 'VacuolePaoo',
    title: '知识库作者',
    desc: '专业做题家，业余开发者',
    links: [
      { type: 'github', icon: 'github', link: 'https://github.com/vacuolepaoo' },
      { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/vacuolepao' },
    ],
    nameAliases: ['vacuolepaoo', 'vacuole', '液泡', 'VacuolePao', 'VacuolePaoo'],
    emailAliases: ['dacongminglcd@gmail.com'],
  },
  // {
  //   name: '絢香音',
  //   avatar: '',
  //   username: 'LittleSound',
  //   title: 'Nólëbase 原始创作者',
  //   desc: '开源开发者，专注于前端，以及前端相关工具库和工具链开发',
  //   links: [
  //     { type: 'github', icon: 'github', link: 'https://github.com/LittleSound' },
  //     { type: 'twitter', icon: 'twitter', link: 'https://twitter.com/OikawaRizumu' },
  //   ],
  //   nameAliases: ['LittleSound', '绚香音', '絢香音', 'Rizumu Oikawa', 'Rizumu Ayaka', 'Ayaka Rizumu', 'Rizumu'],
  //   emailAliases: ['rizumu@ayaka.moe', 'rizumu@oqo.moe'],
  // },
].map<Creator>((c) => {
  c.avatar = c.avatar || getAvatarUrlByGithubName(c.username)
  return c as Creator
})

export const creatorNames = creators.map(c => c.name)
export const creatorUsernames = creators.map(c => c.username || '')
