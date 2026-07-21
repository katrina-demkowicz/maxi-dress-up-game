
const Download = (props) =>
{
    function loadImage(src) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = src;
        });
    }

    async function handleDownload() {
        const dollURLs = Object.values(props.doll).filter(Boolean);
        const loadedDoll = await Promise.all(dollURLs.map(loadImage));

        const width = 1003;
        const height = 2538;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        loadedDoll.forEach((img) => {
            ctx.drawImage(img, 0, 0, width, height);
        });

        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'styled_doll.png';
            a.click();
            URL.revokeObjectURL(url);
        }, 'image/png');
    }


    return(
        <div className='Selection-Button-Image'>
            <img src={props.source} alt={props.name} onClick={handleDownload}/>
        </div>
    )
}

export default Download