import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "Web Notes",
		enableSPA: true,
		enablePopovers: true,
		analytics: null,
		locale: "en-US",
		baseUrl: "avc-mbcet.github.io/quartz-notes",
		ignorePatterns: [],
		defaultDateType: "created",
		theme: {
			fontOrigin: "googleFonts",
			cdnCaching: true,
			typography: {
				header: "Noto Serif",
				body: "Noto Serif",
				code: "JetBrains Mono",
			},
			colors: {
				lightMode: {
					light: "#ececec", // nord0
					lightgray: "#d8d8d8", // nord1
					gray: "#c5c5c5", // nord2
					darkgray: "#808080", // nord3
					dark: "#333333", // nord4
					secondary: "#88c0d0", // nord8
					tertiary: "#d8dee9", // nord12
					highlight: "rgba(143, 159, 169, 0.15)",
				},
				darkMode: {
					light: "#2e3440", // nord4
					lightgray: "#434c5e", // nord5
					gray: "#4c566a", // nord6
					darkgray: "#eceff4", // nord7
					dark: "#d8dee9", // nord0
					secondary: "#81a1c1", // nord8
					tertiary: "#5e81ac", // nord12
					highlight: "rgba(143, 159, 169, 0.15)",
				},

			},
		},
	},
	plugins: {
		transformers: [
			Plugin.FrontMatter(),
			Plugin.CreatedModifiedDate({
				priority: ["frontmatter", "filesystem"],
			}),
			Plugin.Latex({ renderEngine: "katex" }),
			Plugin.SyntaxHighlighting({
				theme: {
					light: "nord",
					dark: "nord",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({
				comments: false,
				highlight: true,
				wikilinks: false,
				callouts: true,
				mermaid: true,
				parseTags: true,
				parseArrows: false,
				parseBlockReferences: true,
				enableInHtmlEmbed: false,
				enableYouTubeEmbed: true,
				enableVideoEmbed: true,
				enableCheckbox: true
			}),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			// Plugin.Description(),
		],
		filters: [Plugin.RemoveDrafts()],
		emitters: [
			Plugin.AliasRedirects(),
			Plugin.ComponentResources(),
			Plugin.ContentPage(),
			Plugin.FolderPage(),
			Plugin.TagPage(),
			Plugin.ContentIndex({
				enableSiteMap: true,
				enableRSS: true,
			}),
			Plugin.Assets(),
			Plugin.Static(),
			Plugin.NotFoundPage(),
		],
	},
}

export default config
