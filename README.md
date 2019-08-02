# pano
360全景

参数参考：

panorama：（必选）全景图的路径。
container：（必选）放置全景图的容器。
autoload：（默认为true）true为自动加载全景图，false为迟点加载全景图（通.过load方法）。
usexmpdata：（默认值为true）photo sphere viewer是否必须读入xmp数据，false为不必须。
cors_anonymous：（默认值为true）true为不能通过cookies获得用户
pano_size：（默认值为null）全景图的大小，是否裁切。
default_position：（默认值为0）定义默认位置，用户看见的第一个点，例如：{long: math.pi, lat: math.pi/2}。
min_fov：（默认值为30）观察的最小区域，单位degrees，在1-179之间。
max_fov：（默认值为90）观察的最大区域，单位degrees，在1-179之间。
allow_user_interactions：（默认值为true）设置为false，则禁止用户和全景图交互（导航条不可用）。
allow_scroll_to_zoom：（默认值为true）若设置为false，则用户不能通过鼠标滚动进行缩放图片。
tilt_up_max：（默认值为math.pi/2）向上倾斜的最大角度，单位radians。
tilt_down_max：（默认值为math.pi/2）向下倾斜的最大角度，单位radians。
min_longitude：（默认值为0）能够展示的最小经度。
max_longitude：（默认值为2PI）能够展示的最大维度。
zoome_level：（默认值为0）默认的缩放级别，值在0-100之间。
long_offset：（默认值为PI/360）mouse/touch移动时每像素经过的经度值。
lat_offset：（默认值为pi/180）mouse/touch移动时每像素经过的纬度值。
time_anim（默认值为2000）全景图在time_anim毫秒后会自动进行动画。（设置为false禁用它）
reverse_anim：（默认值为true）当水平方向到达最大/最小的经度时，动画方向是否反转（仅仅是不能看到完整的圆）。
anim_speed：（默认值为2rpm）动画每秒/分钟多少的速度。
vertical_anim_speed：（默认值为2rpm）垂直方向的动画每秒/分钟多少的速度。
vertical_anim_target：（默认值为0）当自动旋转时的维度，默认为赤道。
navbar：（默认为false）显示导航条。
navbar_style：（默认值为false）导航条的样式。有效的属性：
    backgroundColor：导航条背景色（默认值rgba(61, 61, 61, 0.5)）；
    buttonsColor：按钮前景色（默认值 rgba(255, 255, 255, 0.7)）；
    buttonBackgroundColor：按钮激活时的背景色（默认值 rgba(255, 255, 255, 0.1)）；
    buttonsHeight：按钮高度，单位px（默认值 20）；
    autorotateThickness：自动旋转图片的层（默认值 1）；
    zoomRangeWidth：缩放游标的宽度，单位px（默认值 50）；
    zoomRangeThickness：缩放游标的层（默认值 1）；
    zoomRangeDisk：缩放游标的放大率，单位px（默认值 7）；
    fullscreenRatio：全屏图标的比例（默认值 4/3）；
    fullscreenThickneee：全屏图片的层，单位px（默认值 2）
loading_msg：（默认值为Loading...）加载信息。
loading_img：（默认值 为null）loading图片的路径。
loading_html：（默认值 为null）html加载器（添加到容器中的元素或字符串）。
size：（默认值为null）全景图容器的最终尺寸，例如{width: 500, height: 300}。
onready：（默认值为null）全景图准备好并且第一张图片展示出来后的回调函数。
 
方法介绍
addAction()：添加事件（插件没有提供执行事件的方法，似乎是提供给插件内部使用的）。
fitToContainer()：调整全景图容器大小为指定大小。
getPosition()：获取坐标经纬度。
getPositionInDegrees()：获取经纬度度数。
getZoomLevel()：获取缩放级别。
load()：加载全景图（）。
moveTo(longitude, latitude)：根据经纬度移动到某一点。
rotate(dlong, dlat)：根据经纬度度数移动到某一点。
toggleAutorotate()：是否开启全景图自动旋转。
toggleDeviceOrientation()：是否开启重力感应方向控制。
toggleFullscreen()：是否开启全景图全屏。
toggleStereo()：是否开启立体效果（可用于WebVR哦）。
zoom(level)：设置缩放级别。
zoomIn()：放大。
zoomOut()：缩小。
