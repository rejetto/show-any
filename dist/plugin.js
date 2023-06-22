exports.version = 1.0
exports.description = "Expand file-show to support any file format supported by the browser"
exports.apiRequired = 8.22
exports.frontend_js = "main.js"
exports.repo = "rejetto/show-any"

exports.config = {
    extensions: { 
        label: "File extensions", 
        type: 'array',
        frontend: true,
        defaultValue: [{ ext: 'txt' }, { ext: 'pdf' }],
        fields: {
            ext: { label: "File extension", helperText: "dot excluded" },
        }
    }
}