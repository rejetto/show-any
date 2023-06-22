{
    const exts = HFS.getPluginConfig().extensions.map(x => x.ext.toLowerCase().replace(/^\./, ''))

    HFS.onEvent('fileShow', ({ entry: { ext } }) => 
        exts.includes(ext) && ShowTxt)

    function ShowTxt(props) {
        return HFS.h('iframe', { 
            ...props,
            style: { ...props.style, width: '100%', height: '100%', background: 'var(--bg)' } 
        })
    }
}
