const catchAsync = require('../utils/catchAsync');
const customers = require('../../mock/customer');
const clientController = {
  // GET /
  index: (req, res) => {
    console.log(customers);
    const sections = [
      {
        title: 'BẢNG GIÁ – PHẦN MỀM KẾ TOÁN',
        link: 'https://www.safebooks.vn/bang-gia',
        image: 'mdgF7MM.png',
        layout: 'heading',
      },
      {
        title: 'BẠN CẦN HỖ TRỢ VÀ TƯ VẤN?',
        link: '',
        image: 'mNHzjdr.png',
        layout: 'contact',
      },
      {
        title: 'PHẦN MỀM KHÁC',
        link: '',
        image: 'mdgF7MM.png',
        layout: 'heading',
      },
      {
        title: 'PHẦN MỀM KẾ TOÁN LÀ GÌ?',
        link: '',
        description:
          'Phần mềm kế toán là một ứng dụng hỗ trợ xử lý các công việc của nhân viên kế toán. Nói một cách dễ hiểu thì phần mềm kế toán giống như “người trợ lý” giúp các kế toán viên thực hiện các thao tác nghiệp vụ kế toán thường ngày như nhập liệu, tính toán, tổng hợp, lên báo cáo, xuất dữ liệu… một cách tự động, có hệ thống với độ chính xác cao trong thời gian ngắn dựa trên dữ liệu đầu vào do nhân viên cung cấp. Phần mềm cũng là công cụ đánh giá sức khỏe tài chính của một tổ chức thông qua các tính năng lập báo cáo tài chính, báo cáo kết quả hoạt động kinh doanh, lưu chuyển tiền tệ hay dự báo dòng tiền. Phần mềm kế toán có thể đáp ứng được đầy đủ mọi nghiệp vụ từ cơ bản đến chuyên sâu cũng như phù hợp cho mọi lĩnh vực, ngành nghề, từ quy mô doanh nghiệp vừa và nhỏ.',
        image: 'mdgF7MM.png',
        layout: 'intro',
      },
      {
        title: 'GIẢI PHÁP PHẦN MỀM KẾ TOÁN MANG ĐẾN CHO BẠN',
        link: '',
        image: 'mdgF7MM.png',
        layout: 'content',
        description: '',
      },
      {
        title: 'LỢI ÍCH TỪ BỘ CÔNG CỤ NÀY MANG LẠI',
        link: '',
        image: 'B6UiPm9.png',
        layout: 'content',
      },
      {
        title: 'ĐỘI NGŨ SAFEBOOK',
        link: '',
        description:
          '"Được thành lập từ 2017 với thương hiệu mới là SAFEBOOKS.VN, là đơn vị hoạt động trong lĩnh vực cung cấp giải pháp phần mềm kế toán. Cùng với đội ngũ giàu kinh nghiệm từ nhóm chuyên gia phát triển phần mềm ERP với 10 năm kinh nghiệm trong lĩnh vực tài chính - kế toán. SAFEBOOKS.VN đang ngày càng khẳng định được thương hiệu của mình trên thị trường bằng uy tín, mang lại nhiều giá trị cho khách hàng và đối tác. "',

        image: 'mdgF7MM.png',
        layout: 'staff',
      },
      {
        title: 'KHÁCH HÀNG NÓI GÌ VỀ SAFEBOOKS SAFEBOOKS',
        link: '',
        description:
          'Với đội ngũ dày dặn kinh nghiệm trong lĩnh vực công nghệ thông tin, chúng tôi luôn cố gắng hết sức để tạo ra những sản phẩm, dịch vụ có chất lượng tối ưu, mang lại sự hài lòng cho khách hàng ở mức độ cao nhất.',
        layout: 'comment',
      },

      {
        title: 'SAFEBOOKS',
        link: '',
        description:
          'Công ty cổ phần giải pháp ARITO là một công ty được xây dựng dựa trên kinh nghiệm, khả năng và sự đam mê. ARITO nỗ lực để đưa đến những giải pháp quản lý doanh nghiệp và tài chính kế toán. Cùng với đội ngũ giàu kinh nghiệm từ nhóm chuyên gia phát triển phần mềm ERP với 10 năm kinh nghiệm trong lĩnh vực tài chính - kế toán. Năm 2017, ARITO cho ra đời sản phẩm phần mềm kế toán SAFEBOOKS.VN. SAFEBOOKS.VN đang ngày càng khẳng định được thương hiệu của mình trên thị trường bằng uy tín, mang lại nhiều giá trị cho khách hàng và đối tác.',
        layout: 'video',
      },
    ];
    res.render('client', { title: 'Trang chủ', sections, customers });
  },
};

module.exports = clientController;
