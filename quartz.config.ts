import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
	configuration: {
		pageTitle: "Amal's Notes",
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
					light: "#333333", // nord4
					lightgray: "#4c566a", // nord5
					gray: "#6684b8", // nord6
					darkgray: "#a8c6d0", // nord7
					dark: "#ececec", // nord0
					secondary: "#88c0d0", // nord8
					tertiary: "#d8dee9", // nord12
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
					light: "github-light",
					dark: "github-dark",
				},
				keepBackground: false,
			}),
			Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
			Plugin.GitHubFlavoredMarkdown(),
			Plugin.TableOfContents(),
			Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
			Plugin.Description(),
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
	},,
}

export default config
