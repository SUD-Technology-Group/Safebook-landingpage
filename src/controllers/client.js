const catchAsync = require('../utils/catchAsync');
const customers = require('../../mock/customer');
const mailer = require('../utils/mailer');

const {
  sectionService,
  bannerService,
  commentService,
  staffService,
  featureService,
  mediaService,
} = require('../services');

const clientController = {
  // GET /
  index: catchAsync(async (req, res) => {
    const sections = await sectionService.get({}, '-_id -__v');
    const banners = await bannerService.get({}, '-_id -__v');
    const comments = await commentService.get({}, '-_id -__v');
    const staffs = await staffService.get({}, '-_id -__v');
    const features = await featureService.get({}, '-_id -__v');
    const media = await mediaService.get({}, '-_id -__v');
    res.render('client', {
      title: 'Trang chủ',
      sections,
      customers,
      comments,
      banners,
      features,
      staffs,
      media,
    });
  }),

  // GET /dang-ky-dung-thu
  getTrialForm: (req, res) => {
    res.render('client/trialForm', {
      title: 'Đăng ký dùng thử',
      layout: '',
    });
  },

  // GET /thank-you
  getThankYouPage: (req, res) => {
    res.render('client/thankyou', {
      title: 'Safebooks cảm ơn bạn',
      layout: '',
    });
  },

  // POST /dang-ky-dung-thu
  postTrialForm: catchAsync(async (req, res) => {
    const { name, phone, email, company, mst, position, calltime } = req.body;

    const mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: 'sudtechnology.group@gmail.com',
      to: 'mkt.safebook.vn@gmail.com',
      subject: 'ĐĂNG KÝ MIỄN PHÍ & DÙNG THỬ PHẦN MỀM KẾ TOÁN SAFEBOOKS',
      html: `<style>
                        a:hover {text-decoration: underline !important;}
                    </style>
                    
                    <div
                        marginheight='0'
                        topmargin='0'
                        marginwidth='0'
                        style='margin: 0px; background-color: #f2f3f8;'
                        leftmargin='0'
                    >
                        <table
                            cellspacing='0'
                            border='0'
                            cellpadding='0'
                            width='100%'
                            bgcolor='#f2f3f8'
                            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;"
                        >
                            <tr>
                                <td>
                                    <table
                                        style='background-color: #f2f3f8; max-width:670px; margin:0 auto;'
                                        width='100%'
                                        border='0'
                                        align='center'
                                        cellpadding='0'
                                        cellspacing='0'
                                    >
                                        <tr>
                                            <td style='height:40px;'>&nbsp;</td>
                                        </tr>
                                        <!-- Email Content -->
                                        <tr>
                                            <td>
                                                <table
                                                    width='95%'
                                                    border='0'
                                                    align='center'
                                                    cellpadding='0'
                                                    cellspacing='0'
                                                    style='max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;'
                                                >
                                                    <tr>
                                                        <td style='height:40px;'>&nbsp;</td>
                                                    </tr>
                                                    <!-- Title -->
                                                    <tr>
                                                        <td
                                                            style='padding:0 15px; text-align:center;'
                                                        >
                                                            <h1
                                                                style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;"
                                                            >Thông tin đăng ký</h1>
                                                            <span
                                                                style='display:inline-block; vertical-align:middle; margin-top:29px; border-bottom:1px solid #cecece; 
                                                            width:100px;'
                                                            ></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style='padding:15px; text-align:right; color:#5e5e5e'
                                                        >
                                                            <em>${ new Date().toLocaleString('vi-VN', {timeZone: 'Asia/Ho_Chi_Minh'})}</em>
                                                        </td>
                                                    </tr>
                                                    <!-- Details Table -->
                                                    <tr>
                                                        <td>
                                                            <table
                                                                cellpadding='0'
                                                                cellspacing='0'
                                                                style='width: 100%; border: 1px solid #ededed'
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Họ và tên:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Số điện thoại:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${phone}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Email:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${email}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Tên doanh nghiệp:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${company}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            MST:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${mst}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Chức vụ:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${position}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Thời gian có thể nhận cuộc gọi trong ngày:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${calltime}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style='height:40px;'>&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style='height:20px;'>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>`,
    };
    mailer.sendMail(mainOptions, function (err) {
      if (err) {
        req.flash('error', 'Có lỗi đã xảy ra. Vui lòng thử lại!');
        return res.redirect('/');
      }
      res.redirect('/loi-cam-on');
    });
  }),

  // POST /lien-he
  contact: catchAsync(async (req, res) => {
    const { name, phone } = req.body;

    const mainOptions = {
      // thiết lập đối tượng, nội dung gửi mail
      from: 'sudtechnology.group@gmail.com',
      to: 'mkt.safebook.vn@gmail.com',
      subject: 'Thông tin khách hàng cần tư vấn',
      html: `<style>
                        a:hover {text-decoration: underline !important;}
                    </style>
                    
                    <div
                        marginheight='0'
                        topmargin='0'
                        marginwidth='0'
                        style='margin: 0px; background-color: #f2f3f8;'
                        leftmargin='0'
                    >
                        <table
                            cellspacing='0'
                            border='0'
                            cellpadding='0'
                            width='100%'
                            bgcolor='#f2f3f8'
                            style="@import url(https://fonts.googleapis.com/css?family=Rubik:300,400,500,700|Open+Sans:300,400,600,700); font-family: 'Open Sans', sans-serif;"
                        >
                            <tr>
                                <td>
                                    <table
                                        style='background-color: #f2f3f8; max-width:670px; margin:0 auto;'
                                        width='100%'
                                        border='0'
                                        align='center'
                                        cellpadding='0'
                                        cellspacing='0'
                                    >
                                        <tr>
                                            <td style='height:40px;'>&nbsp;</td>
                                        </tr>
                                        <!-- Email Content -->
                                        <tr>
                                            <td>
                                                <table
                                                    width='95%'
                                                    border='0'
                                                    align='center'
                                                    cellpadding='0'
                                                    cellspacing='0'
                                                    style='max-width:670px; background:#fff; border-radius:3px;-webkit-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);-moz-box-shadow:0 6px 18px 0 rgba(0,0,0,.06);box-shadow:0 6px 18px 0 rgba(0,0,0,.06);padding:0 40px;'
                                                >
                                                    <tr>
                                                        <td style='height:40px;'>&nbsp;</td>
                                                    </tr>
                                                    <!-- Title -->
                                                    <tr>
                                                        <td
                                                            style='padding:0 15px; text-align:center;'
                                                        >
                                                            <h1
                                                                style="color:#1e1e2d; font-weight:400; margin:0;font-size:32px;font-family:'Rubik',sans-serif;"
                                                            >Thông tin liên hệ</h1>
                                                            <span
                                                                style='display:inline-block; vertical-align:middle; margin-top:29px; border-bottom:1px solid #cecece; 
                                                            width:100px;'
                                                            ></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style='padding:15px; text-align:right; color:#5e5e5e'
                                                        >
                                                            <em>${new Date().toLocaleString('vi-VN')}</em>
                                                        </td>
                                                    </tr>
                                                    <!-- Details Table -->
                                                    <tr>
                                                        <td>
                                                            <table
                                                                cellpadding='0'
                                                                cellspacing='0'
                                                                style='width: 100%; border: 1px solid #ededed'
                                                            >
                                                                <tbody>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Họ và tên:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${name}</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; border-right: 1px solid #ededed; width: 35%; font-weight:600; color:rgba(0,0,0,.64)'
                                                                        >
                                                                            Số điện thoại:</td>
                                                                        <td
                                                                            style='padding: 10px; border-bottom: 1px solid #ededed; color: #455056;'
                                                                        >
                                                                            ${phone}</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style='height:40px;'>&nbsp;</td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style='height:20px;'>&nbsp;</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </div>`,
    };
    mailer.sendMail(mainOptions, function (err) {
      if (err) {
        req.flash('error', 'Có lỗi đã xảy ra. Vui lòng thử lại!');
        return res.redirect('back');
      }
      res.redirect('/loi-cam-on');
    });
  }),
};

module.exports = clientController;
