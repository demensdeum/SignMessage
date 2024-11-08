var signMessageTransformer = function(message) {
    message += "\n\nОтправлено из JavaScript расширения GramEXT";
    return message;
};

OutputMessageAddTransformer(signMessageTransformer);