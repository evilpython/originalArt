const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^а-яА-ЯёЁ 0-9\.\,\?\!\-\(\)\'\"\:\;\s]/ig)) {
                e.preventDefault();
            }
        })
    })
};

export default checkTextInputs;