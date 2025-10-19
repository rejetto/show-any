exports.version = 1.03
exports.description = "Expand file-show to support any file format supported by the browser"
exports.apiRequired = 8.22
exports.frontend_js = "main.js"
exports.repo = "rejetto/show-any"
exports.changelog = [
    { "version": 1.03, "message": "compatibility with firefox 52" },
]
exports.configDialog = {
    sx: { maxWidth: '16em' },
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