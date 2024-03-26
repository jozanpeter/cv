class Runtime {

    static GetFileContent(path) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', path);
            xhr.onreadystatechange = function() {
                console.log(200);
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(new Error('Failed to load file'));
                    }
                }
            };
            xhr.send();
        });
    }

}