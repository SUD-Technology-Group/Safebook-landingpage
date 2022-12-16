const catchAsync = require('../utils/catchAsync');
const customers = require('../../mock/customer');
const mailer = require('../utils/mailer');

const { sectionService, bannerService, commentService, staffService, featureService } = require('../services');

const clientController = {
  // GET /
  index: catchAsync(async (req, res) => {
    const sections = await sectionService.get({}, '-_id -__v');
    const banners = await bannerService.get({}, '-_id -__v');
    const comments = await commentService.get({}, '-_id -__v');
    const staffs = await staffService.get({}, '-_id -__v');
    const features = await featureService.get({}, '-_id -__v');

    const message = {
      error: req.flash('error'),
      success: req.flash('success'),
    };

    console.log(banners);
    var media = [
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/vnexpress-logo-2.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/cafef-logo-2.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/vtv-media-logo-1.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/vneconomy-logo-1.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/vietnamnet-logo.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/cafebiz-logo.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/Dan-Tri-Logo.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/Brands-Vietnam-Logo.png' },
      { title: '', link: '', img: 'https://www.saokim.com.vn/storage/2022/08/VITV-Logo.png' },
    ];

    res.render('client', {
      title: 'Trang chủ',
      sections,
      customers,
      comments,
      banners,
      features,
      staffs,
      media,
      message,
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
      req.flash('success', 'Chúng tôi sẽ liên lạc với bạn trong thời gian sớm nhất!');
      res.redirect('back');
    });
  }),
};

module.exports = clientController;
