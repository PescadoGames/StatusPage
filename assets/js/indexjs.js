// 動きのきっかけとなるアニメーションの名前を定義
function slideAnime() {
	$('.leftAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			//左から右へ表示するクラスを付与
			//テキスト要素を挟む親要素(左側)とテキスト要素を元位置でアニメーションを行う
			$(this).addClass("slideAnimeLeftRight");
			//要素を左枠外へ移動し CSSアニメーションで左から元の位置に移動
			$(this).children(".LeftAnimeInner").addClass("slideAnimeRightLeft ");
			//子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションを行う
		} else {
			//左から右へ表示するクラスを削除
			$(this).removeClass("slideAnimeLeftRight");
			$(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft ");
		}
	});
}

/*===========================================================*/
/* 印象編 4 最低限おぼえておきたい動き*/
/*===========================================================*/

// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {
	// 4-1 ふわっ（下から）

	$('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
		} else {
			$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
		}
	});
	//4-1 ふわっ（左から）
	$('.fadeLeftTrigger').each(function () { //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		} else {
			$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
	});
	//4-1 ふわっ（右から）
	$('.fadeRightTrigger').each(function () { //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		} else {
			$(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
		}
	});
	//4-1 ふわっ（右から）
	$('.card-container').each(function () { //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top - 50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass('card-show');// 画面内に入ったらfadeRightというクラス名を追記
		} else {
			$(this).removeClass('card-show');// 画面外に出たらfadeRightというクラス名を外す
		}
	});
}

//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	slideAnime();/* アニメーション用の関数を呼ぶ*/
	fadeAnime();
});
