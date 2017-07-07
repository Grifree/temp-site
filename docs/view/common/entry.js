import $ from 'jquery';

console.log('view/common/entry')

let url = location.pathname
switch (url) {
	case '/public':
		$('.m-head-nav-bd-item').eq(1).addClass('m-head-nav-bd-item--on');
	break;
	case '/tribe':
		$('.m-head-nav-bd-item').eq(2).addClass('m-head-nav-bd-item--on');
	break;
    case '/about':
        $('.m-head-nav-bd-item').eq(3).addClass('m-head-nav-bd-item--on');
    break;
	default :
		$('.m-head-nav-bd-item').eq(0).addClass('m-head-nav-bd-item--on');
}
$('.m-head-nav').on('click',function(){
	let $this = $(this)
	$this.find('.m-head-nav-bd').toggleClass('m-head-nav-bd--on')
})
