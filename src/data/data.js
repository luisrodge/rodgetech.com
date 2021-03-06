module.exports = {
  SiteTitle: "rodgeTech",
  Sitelogo: "#",
  SiteLogoText: "rodgeTech",
  SiteAuthor: "Luis Rodriguez",
  SiteDescription: "Full Stack Developer",
  defaultDescription:
    "I'm A Full Stack Developer With A Burning Passion For All Things Coding And Tech",
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  },
  SiteSocialLinks: {
    github: "https://github.com/rodgeTech",
    linkedin: "https://www.linkedin.com/in/rodriglu/",
    codingclub: "https://www.belizecodingclub.org",
  },
  SiteAddress: {
    city: "Santa Elena",
    region: "Cayo",
    country: "Belize",
    zipCode: "ZipCode",
  },
  SiteContact: {
    email: "rodgetech@gmail.com",
    phone: "501-608-2077",
  },
  SiteCopyright: "2021",
}
