module.exports = {
  apps : [
    {
      name: "nuxt-dev",
      script: "npm",
      args: "run dev"
    },
    {
      name: "nuxt-prod",
      script: "server/index.js",
      args: "start"
    }
  ]
}