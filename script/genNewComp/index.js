const infoCollector = require('./infoCollector')
const tplReplacer = require('./tplReplacer')

async function run() {
  // 收集问题
  const meta = await infoCollector()
  // 创建模板
  tplReplacer(meta)
}

run()
