exports.version = 1.0
exports.description = "Expand file-show to support any file format supported by the browser"
exports.apiRequired = 8.22
exports.frontend_js = "main.js"
exports.repo = "rejetto/show-any"

exports.configDialog = {
    sx: { maxWidth: '15em' },
}

exports.config = {
    extensions: { 
        label: false, 
        type: 'array',
        frontend: true,
        defaultValue: [{ ext: 'txt' }, { ext: 'pdf' }],
        fields: {
            ext: { label: "File extension", helperText: "dot excluded" },
        }
    }
}