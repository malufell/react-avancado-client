// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = true
// const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public', //para onde os arquivos irão
    disable: !isProd //quando ta em desenvolvimento não roda, pq esse serviço pode gerar alguns conflitos desnecessários
  }
})
