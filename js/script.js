var app = new Vue({
    el: '#root',
    data: {
        playlist:[],
        sortedPlaylist:[]
    },
    methods: {

    },
    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                
                const albums = response.data;
                this.playlist = albums.response;

                sortedPlaylist = this.playlist.sort(function(a,b){
                    return a.year - b.year;
                })
                
            });
    },
})