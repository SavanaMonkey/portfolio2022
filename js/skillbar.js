$(function(){
    var num = 0;
    $(window).scroll(function () {
        /*스킬바*/
        if ($(document).scrollTop() > $('.Skills').offset().top -300) {
            $('#photoshop').addClass("ani_80");
            $('#illustrator').addClass("ani_70");
            $('#xd').addClass("ani_80");
            $('#figma').addClass("ani_70");
            $('#HnC').addClass("ani_70");
            $('#js').addClass("ani_50");
            $('#jquery').addClass("ani_50");
            $('#tailwind').addClass("ani_50");
            $('#mysql').addClass("ani_40");
            $('#mongodb').addClass("ani_30");
            $('#videoEdt').addClass("ani_60");
            $('#reporting').addClass("ani_70");
            $('#painting').addClass("ani_90");
            
            if (num < 1) {

                /*디자인*/
                
                /*photoshop*/
                $({val: 0 /*시작 숫자*/}).animate({val: 80 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".photoshop_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".photoshop_num").text(num + '%');
                    }
                })

                /*illustrator */
                $({val: 0 /*시작 숫자*/}).animate({val: 70 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".illustrator_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".illustrator_num").text(num + '%');
                    }
                })


                /*XD*/
                $({val: 0 /*시작 숫자*/}).animate({val: 80 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".xd_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".xd_num").text(num + '%');
                    }
                })

                /*Figma*/
                $({val: 0 /*시작 숫자*/}).animate({val: 70 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".figma_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".figma_num").text(num + '%');
                    }
                })


                /*프론트엔드*/

                /*HTML5 / CSS3*/
                $({val: 0 /*시작 숫자*/}).animate({val: 70 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".HnC_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".HnC_num").text(num + '%');
                    }
                })

                /*JavaScript*/
                $({val: 0 /*시작 숫자*/}).animate({val: 50 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".js_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".js_num").text(num + '%');
                    }
                })
                
                /*jQuery*/
                $({val: 0 /*시작 숫자*/}).animate({val: 50 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".jquery_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".jquery_num").text(num + '%');
                    }
                })
                
                /*Tailwind CSS*/
                $({val: 0 /*시작 숫자*/}).animate({val: 50 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".tailwind_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".tailwind_num").text(num + '%');
                    }
                })


                /*백엔드*/

                /*MySQL*/
                $({val: 0 /*시작 숫자*/}).animate({val: 40 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".mysql_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".mysql_num").text(num + '%');
                    }
                })

                /*MongoDB*/
                $({val: 0 /*시작 숫자*/}).animate({val: 30 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".mongodb_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".mongodb_num").text(num + '%');
                    }
                })


                /*ETC*/

                /*비디오 편집*/
                $({val: 0 /*시작 숫자*/}).animate({val: 60 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".videoEdt_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".videoEdt_num").text(num + '%');
                    }
                })

                /*보고서 작성*/
                $({val: 0 /*시작 숫자*/}).animate({val: 70 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".reporting_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".reporting_num").text(num + '%');
                    }
                })

                /*보고서 작성*/
                $({val: 0 /*시작 숫자*/}).animate({val: 90 /*최종숫자*/}, {
                    duration: 1600 /*숫자 올라가는 시간*/ ,
                    step: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".painting_num").text(num + '%');
                    },
                    complete: function () {
                        num = numberWithCommas(Math.floor(this.val));
                        $(".painting_num").text(num + '%');
                    }
                })
            }
            
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
        }
    });
});