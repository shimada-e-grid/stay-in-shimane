import $ from 'jquery';

const japan_map: React.CSSProperties = {
  position: 'relative',
  boxSizing: 'border-box',
  display: 'table',
  height: '100%'
}

const japan_map_img: React.CSSProperties = {
  maxWidth: '100%',
  height: 'auto',
  border: '0',
  WebkitBackfaceVisibility: 'hidden'
}

const area_btn: React.CSSProperties = {
  position: 'absolute',
  zIndex: '1',
  boxSizing: 'border-box',
  cursor: 'pointer',
  border: '3px solid #333333',
  borderRadius: '5px',
  backgroundColor: '#FFF',
  padding: '0.2em auto',
  fontWeight: 'bold',
  textAlign: 'center',
  whiteSpace: 'nowrap'
}

const area1: React.CSSProperties = {
  top: '31%',
  right: '0',
  width: '30%'
}

const area2: React.CSSProperties = {
  top: '65%',
  right: '12%',
  width: '13%'
}

const area3: React.CSSProperties = {
  top: '62%',
  right: '27.5%',
  width: '13%'
}

const area4: React.CSSProperties = {
  top: '68%',
  right: '41%',
  width: '13%'
}

const area5: React.CSSProperties = {
  top: '66%',
  left: '25%',
  width: '20%'
}

const area6: React.CSSProperties = {
  top: '67%',
  left: '1%',
  width: '20%'
}

const area_overlay: React.CSSProperties = {
  display: 'none',
  position: 'absolute',
  zIndex: '2',
  top: '0',
  left: '0',
  minWidth: '100%',
  minHeight: '100%',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#111',
  opacity: '0.5',
  cursor: 'pointer'
}

const pref_area: React.CSSProperties = {
  display: 'none'
}

const pref_list: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translateY(-50%) translateX(-50%)',
  WebkitTransform: 'translateY(-50%) translateX(-50%)',
  zIndex: '3',
  boxSizing: 'border-box',
  display: '-webkit-flex flex',
  WebkitFlexWrap: 'wrap',
  flexWrap: 'wrap',
  width: '50%',
  backgroundColor: '#FFF'
}

const div: React.CSSProperties = {
  boxSizing: 'border-box',
  border: '1px solid #CCC',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0.5em',
  cursor: 'pointer'
}

$(function(){
  //地域を選択
  $('.area_btn').click(function(){
      $('.area_overlay').show();
      $('.pref_area').show();
      var area = $(this).data('area');
      $('[data-list]').hide();
      $('[data-list="' + area + '"]').show();
  })

  //レイヤーをタップ
  $('.area_overlay').click(function(){
    prefReset();
  });

    //都道府県をクリック
    $('.pref_list [data-id]').click(function(){
      if($(this).data('id')){
          var id = $(this).data('id');
          // 画面遷移
          window.location.href = 'http://localhost:3001/rooms?search[prefecture]=' + id;
          prefReset();
      }
  });

  //表示リセット
  function prefReset(){
    $('[data-list]').hide();
    $('.pref_area').hide();
    $('.area_overlay').hide();
  }
}
)

export const SelectMap: React.FC = () => {
  return(
    <>
      <div className="japan_map m-4" style={Object.assign(japan_map)}>
        <img src="./map_of_japan.png" alt="日本地図" style={japan_map_img}></img>
        <span className="area_btn" style={{...area_btn, ...area1}} data-area="1">北海道・東北</span>
        <span className="area_btn" style={{...area_btn, ...area2}} data-area="2">関東</span>
        <span className="area_btn" style={{...area_btn, ...area3}} data-area="3">中部</span>
        <span className="area_btn" style={{...area_btn, ...area4}} data-area="4">近畿</span>
        <span className="area_btn" style={{...area_btn, ...area5}} data-area="5">中国・四国</span>
        <span className="area_btn" style={{...area_btn, ...area6}} data-area="6">九州・沖縄</span>

        <div className="area_overlay" style={Object.assign(area_overlay)}></div>
        <div className="pref_area" style={Object.assign(pref_area)}>
          <div className="pref_list" style={Object.assign(pref_list)} data-list="1">
            <div data-id="1" style={Object.assign(div)}>北海道</div>
            <div data-id="2" style={Object.assign(div)}>青森県</div>
            <div data-id="3" style={Object.assign(div)}>岩手県</div>
            <div data-id="4" style={Object.assign(div)}>宮城県</div>
            <div data-id="5" style={Object.assign(div)}>秋田県</div>
            <div data-id="6" style={Object.assign(div)}>山形県</div>
            <div data-id="7" style={Object.assign(div)}>福島県</div>
            <div style={Object.assign(div)}></div>
          </div>

          <div className="pref_list" style={Object.assign(pref_list)} data-list="2">
            <div data-id="8" style={Object.assign(div)}>茨城県</div>
            <div data-id="9" style={Object.assign(div)}>栃木県</div>
            <div data-id="10" style={Object.assign(div)}>群馬県</div>
            <div data-id="11" style={Object.assign(div)}>埼玉県</div>
            <div data-id="12" style={Object.assign(div)}>千葉県</div>
            <div data-id="13" style={Object.assign(div)}>東京都</div>
            <div data-id="14" style={Object.assign(div)}>神奈川県</div>
            <div style={Object.assign(div)}></div>
          </div>

          <div className="pref_list" style={Object.assign(pref_list)} data-list="3">
            <div data-id="15" style={Object.assign(div)}>新潟県</div>
            <div data-id="16" style={Object.assign(div)}>富山県</div>
            <div data-id="17" style={Object.assign(div)}>石川県</div>
            <div data-id="18" style={Object.assign(div)}>福井県</div>
            <div data-id="19" style={Object.assign(div)}>山梨県</div>
            <div data-id="20" style={Object.assign(div)}>長野県</div>
            <div data-id="21" style={Object.assign(div)}>岐阜県</div>
            <div data-id="22" style={Object.assign(div)}>静岡県</div>
            <div data-id="23" style={Object.assign(div)}>愛知県</div>
            <div></div>
          </div>

          <div className="pref_list" style={Object.assign(pref_list)} data-list="4">
            <div data-id="24" style={Object.assign(div)}>三重県</div>
            <div data-id="25" style={Object.assign(div)}>滋賀県</div>
            <div data-id="26" style={Object.assign(div)}>京都府</div>
            <div data-id="27" style={Object.assign(div)}>大阪府</div>
            <div data-id="28" style={Object.assign(div)}>兵庫県</div>
            <div data-id="29" style={Object.assign(div)}>奈良県</div>
            <div data-id="30" style={Object.assign(div)}>和歌山県</div>
            <div></div>
          </div>

        <div className="pref_list" style={Object.assign(pref_list)} data-list="5">
          <div data-id="31" style={Object.assign(div)}>鳥取県</div>
          <div data-id="32" style={Object.assign(div)}>島根県</div>
          <div data-id="33" style={Object.assign(div)}>岡山県</div>
          <div data-id="34" style={Object.assign(div)}>広島県</div>
          <div data-id="35" style={Object.assign(div)}>山口県</div>
          <div data-id="36" style={Object.assign(div)}>徳島県</div>
          <div data-id="37" style={Object.assign(div)}>香川県</div>
          <div data-id="38" style={Object.assign(div)}>愛媛県</div>
          <div data-id="39" style={Object.assign(div)}>高知県</div>
          <div></div>
        </div>

        <div className="pref_list" style={Object.assign(pref_list)} data-list="6">
          <div data-id="40" style={Object.assign(div)}>福岡県</div>
          <div data-id="41" style={Object.assign(div)}>佐賀県</div>
          <div data-id="42" style={Object.assign(div)}>長崎県</div>
          <div data-id="43" style={Object.assign(div)}>熊本県</div>
          <div data-id="44" style={Object.assign(div)}>大分県</div>
          <div data-id="45" style={Object.assign(div)}>宮崎県</div>
          <div data-id="46" style={Object.assign(div)}>鹿児島県</div>
          <div data-id="47" style={Object.assign(div)}>沖縄県</div>
        </div>
      </div>
    </div>
  </>
  )
}