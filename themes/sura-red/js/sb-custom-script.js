$(document).ready(function(){

    handleMegaMenu();

    /**
     * Handle Programmes Mega Menu
     */
    function handleMegaMenu(){

        var sbOwl = $(".widget .owl-carousel");
        var sbOwlOrg = sbOwl.clone();

        $(".sb-mega-menu-button").click(function(){
            $(".sb-mega-menu-button").removeClass("sb-mega-menu-button-selected");
            $(this).addClass("sb-mega-menu-button-selected");
            removeAllCourses();

            switch ($(this).text()) {
                case "All":
                    addCourses([0,1,2,3,4,5,6]);
                    break;
                case "Graduates":
                    addCourses([0]);
                    break;
                case "Undergraduates":
                    addCourses([1,0,5]);
                    break;
                case "After A/L":
                    addCourses([2,3,4,6]);
                    break;
                case "IT Professionals":
                    addCourses([5,1,0,6]);
                    break;
            }

        });

        function addCourses(programIndexs){
            for (var i = 0; i < programIndexs.length; i++) {
                var element = ($(sbOwlOrg.find(".oc-item")[programIndexs[i]]).clone())[0];
                sbOwl.trigger('add.owl.carousel',element,i);
            }
            sbOwl.trigger('refresh.owl.carousel');
        }

        function removeAllCourses(){
            for(var i=0;i<sbOwlOrg.find(".oc-item").length;i++){
                sbOwl.trigger('remove.owl.carousel',i);
            }
        }
    }


});