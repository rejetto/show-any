'use strict';{
    const exts = HFS.getPluginConfig().extensions.map(x => x.ext)

    HFS.onEvent('fileShow', ({ entry: { ext } }) =>
        exts.includes(ext) && ShowFrame)

    function ShowFrame(props) {
        return HFS.h('iframe', _.merge(props, {
            style: { width: '100%', height: '100%', background: 'var(--bg)' }
        }))
    }
}
