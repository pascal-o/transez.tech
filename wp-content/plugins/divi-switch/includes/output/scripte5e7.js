jQuery(document).ready(function($){$unformattednum = $('#et-info-phone').text();
$formattednum = $unformattednum.replace(/-|\s/g,"");
$("#et-info-phone").wrapInner("<a href=tel:" + $formattednum + "></a>");
function ds_setup_collapsible_submenus() {
    var $menu = $('#mobile_menu'),
	top_level_link = '#mobile_menu .menu-item-has-children > a';
		
	$menu.find('a').each(function() {
		$(this).off('click');
			 
		if ( $(this).is(top_level_link) ) {
			$(this).attr('href', '#');
		}
			 
		if ( ! $(this).siblings('.sub-menu').length ) {
			$(this).on('click', function(event) {
				$(this).parents('.mobile_nav').trigger('click');
			});
		} else {
			$(this).on('click', function(event) {
				event.preventDefault();
				$(this).parent().toggleClass('visible');
			});
		}
	});
}
 
$(window).load(function() {
	setTimeout(function() {
		ds_setup_collapsible_submenus();
	}, 700);
});

});