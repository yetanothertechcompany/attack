/* Variable Declaration */
var id;
var clicked=[];
var array=["Frontal Assault. Attack the competitor on its core strengths. This can be done in two manners. First, one can simply introduce a similar &#8220;me, too&#8221; product at a lower price. Unilever's Suave brand has made its living for decades by introducing health and beauty products that mimic the benefits of leading brands at a much lower price.<br><br>Attacks are not always price-based, however. Semiconductor manufacturer AMD, perennial number two to Intel, has battled for years to match Intel on technology, and had a success in its Athlon 64 chips in 2004.<br><br>Either by price or quality means, frontal assault tends to be very expensive. You either give up profit margin or have to spend heavily on product development. Ries and Trout argue more nuanced strategies may be superior.",
"<i>Judo Attack</i>. Here, rather than attack a competitor's strength, the goal is to take that strength and make it a weakness. This is what Dell did to Compaq in the 1990s. Compaq at the time had by far the best retail distribution in the industry through stores like CompUSA. Then Dell came along with their direct distribution model and effectively made Compaq's retail distribution network obsolete. Compaq tried to fight back with its own direct sales, but in turn faced a backlash from the retailers still carrying its products. Eventually Compaq was driven into HP's arms. Interestingly, HP has more recently turned the tables on Dell, investing extensively in product development and logistics to improve its relationship with retailers, which has been widely credited for the renaissance of HP personal computers.",
"<i>Flanking Attack</i>. Attack an edge of a competitor's territory. Don't try to capture the whole hill, just grab a foothill. Then try to drain away the competitor's advantage. Probably the most famous example of this kind of strategy was Wal-Mart's pursuit of towns that were too small for other department stores such as Sears. At one point over half of its stores were located in towns of less than 25,000 people, and over a third faced no traditional competition of any kind. As these towns grew, they might have become attractive to other retailers, but by then it was too late: Wal-Mart was firmly entrenched. More recently, Red Bull had similar success initially targeting non-traditional channels (bars, nightclubs) for its energy drinks.",
"<i>Guerilla Attack</i>. Make attacks on a competitor's territory that are small enough to avoid response. (Think mosquitoes.) This can often be done by a quality niche strategy. As Ries and Trout observe, Kraft makes cheese, but so do hundreds of small companies that seem to be able to carve out their marketspace. Since there are more small companies than large ones, looking for this defensible niche is a very useful strategy."];
var clickedItem = [];
var imageText=["null"];
/* Script */
$(document).ready(function () {
	/* Click Event*/
	$(".image").click(function(){
		clickedItem.push(id);
		id = $(this).attr("id").slice("5");
		showContent(id);
	});
	/* Keyboard Event*/
	$(".image").keydown(function(e){
		if(e.which == 13)
		{
			clickedItem.push(id);
			id = $(this).attr("id").slice("5");
			showContent(id);
		}
	});

	/* Function for Content Show*/
	function showContent(id)
	{
		if(clicked[0] === id){
      $('.content').show();
    } else {
      $('.content').css({left: '800px' }, 1000).hide();
      clicked = [];
    }
    $(".text").removeClass('brown-background');
		$('#text'+id).addClass('brown-background');
	 $("#textcontent"+id).animate({left:'1px'},1000, function(){$('#textcontent'+id).focus()}).html(array[id-1]).show();
	}
	$("#image4").focusin(function(e){
     if(e.which == 9)
		{
     $("#image1").attr("tabindex","0").focus();
		}
	});
});
