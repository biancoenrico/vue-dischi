var app = new Vue({
    el: '#root',
    data: {
        playlist:[],
        options: ['All'],
        select: 'All'
    },
    methods: {
        
        
    },

    mounted(){
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {

                const albums = response.data;
                this.playlist = albums.response;

                this.playlist = this.playlist.sort(function(a,b){
                    return a.year - b.year;
                })

                this.playlist.forEach((element) =>{

                    if(!this.options.includes(element.genre) ){
                        this.options.push(element.genre);
                    }
                    console.log(this.options);
                });

                  
                
                
            });
            

        },
        
})