        let tf = 0;
        $(function() {
            // scrollse();
            scrollXevent();
        });
        function scrollse(){
            $("#wrap").on('scroll', function(){
                if($(this).scrollLeft() == 0){
                    if(tf == 0){
                        tf = 1
                    }
                } else if(Math.ceil($(this).scrollLeft() + $(this).width()) >= $(".thumbnails").width()){
                    if(tf == 0){
                        tf = 1
                    }
                } else{
                    if(tf == 1){
                        tf = 0
                    }
                }
            });
        }
        function scrollXevent(){
            $("#wrap").on('mousewheel',function(event, delta){
                // 높이값 고정하려면 아래거 해제
                // $(document).scrollTop($("#wrap").offset().top - ($("#wrap").outerHeight()/2));
                this.scrollLeft -= (delta * 30);
                // if(tf == 0){
                    event.preventDefault();
                // }
            })
        }

        // 드래그
        const slider = document.querySelector('#wrap');
        let isMouseDown = false;
        let startX, scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            slider.classList.add('active');

            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isMouseDown = false;
            slider.classList.remove('active');
        });
        
        slider.addEventListener('mouseup', () => {
            isMouseDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isMouseDown) return;

            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 1;
            slider.scrollLeft = scrollLeft - walk;
        });