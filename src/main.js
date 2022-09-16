const API = 'https://youtube138.p.rapidapi.com/channel/videos/?id=UCMIj6lzAfn2KI_8DDtYc05A&hl=en&gl=US';


const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8ebddfebd4msh4bd22103b70c394p1f2e7bjsn9e10549e3942',
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try{
        const videos = await fetchData(API);
        let arrvideo = [];
        for(let i = 0; i<30; i++){
            if(videos.contents[i].video.movingThumbnails){
                arrvideo.push(`
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${videos.contents[i].video.movingThumbnails[0].url}" alt="no hay" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${videos.contents[i].video.title}
                        </h3>
                    </div>
                </div>
                `)
            }
        }
        arrvideo = arrvideo.slice(0, 4).join('');

        let view = `${arrvideo}`;
        content.innerHTML = view;
    } catch (error){
        console.log(error);
    }
})();