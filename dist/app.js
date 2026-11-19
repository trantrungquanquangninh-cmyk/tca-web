const lessons = [
 ['Tổng quan khóa học & làm quen với Revit', ['Giới thiệu lộ trình, mục tiêu và ứng dụng thực tế.', 'Tổng quan BIM, Revit và khác biệt 2D – 3D.', 'Làm quen giao diện, công cụ và thao tác cơ bản.', 'Thiết lập Project, Level, Grid, View và quản lý bản vẽ.', 'Import/Link CAD, PDF và chuẩn bị dữ liệu.']],
 ['Dựng mô hình Revit cơ bản', ['Nguyên lý dựng model từ bản vẽ kiến trúc và kết cấu.', 'Dựng Wall, Floor, Column, Beam, Door và Window.', 'Sử dụng các công cụ chỉnh sửa và quản lý cấu kiện.', 'Tạo và quản lý Plan, Section, Elevation và 3D View.', 'Thực hành dựng mô hình công trình từ bản vẽ 2D.']],
 ['Quản lý mô hình, Family & Parameter', ['Dựng Roof, Ceiling, Stair, Railing và cấu kiện bổ sung.', 'Tìm hiểu Family, Type Parameter và Instance Parameter.', 'Sử dụng Generic Model và tạo cấu kiện tùy chỉnh cơ bản.', 'Quản lý Material, Visibility/Graphics, Filter và View Template.', 'Tổ chức mô hình phục vụ thiết kế, trình bày và dự toán.']],
 ['Schedule, Phasing & Design Options', ['Quản lý thông tin bằng Project & Shared Parameter.', 'Schedule, Material Takeoff và xuất dữ liệu sang Excel.', 'Filter, Sorting & Formatting.', 'Phasing: quản lý các giai đoạn hiện trạng, phá dỡ, xây mới.', 'Design Options: tạo, quản lý và so sánh các phương án thiết kế.', 'Bóc tách khối lượng theo Phase & Design Option.']],
 ['Dự toán xây dựng tại Úc – bài toán thực tế', ['Tổng quan ngành xây dựng tại Úc, công việc Estimator và quy trình Tender.', 'Phân tích bản vẽ, Specifications và Scope of Work (SOW).', 'Tìm hiểu BOQ, RFI, RFQ và quy trình lấy báo giá.', 'Ứng dụng Revit để bóc tách khối lượng và lập dự toán.', 'Phân tích khối lượng, đơn giá, chi phí và phương án thi công.']],
 ['Ứng dụng AI & xây dựng công cụ tự động hóa', ['Tổng quan AI và ứng dụng trong ngành xây dựng.', 'Sử dụng AI để đọc, phân tích bản vẽ và tài liệu kỹ thuật.', 'Ứng dụng AI với Excel, VBA và Python.', 'Tư duy xây dựng công cụ giải quyết công việc thực tế.', 'Thực hành tạo công cụ tự động hóa phục vụ dự toán.']],
 ['AI – Revit Add-in – Web App & quản lý dữ liệu', ['Tìm hiểu nguyên lý tạo Tool và Add-in cho Revit.', 'Ứng dụng AI hỗ trợ viết code và phát triển công cụ.', 'Xây dựng Web App để sử dụng công cụ trực tuyến.', 'Lưu trữ, tìm kiếm và quản lý dữ liệu dự án trên Web.', 'Minh họa quy trình kết nối Revit, Excel, AI và Web App.']],
 ['Biện pháp thi công bằng Blender – hỏi đáp & chữa bài', ['Giới thiệu Blender và ứng dụng trong ngành xây dựng.', 'Chuyển đổi mô hình từ Revit sang Blender.', 'Trực quan hóa trình tự và biện pháp thi công.', 'Tạo Animation mô phỏng quá trình xây dựng.', 'Tổng kết khóa học, giải đáp thắc mắc và chữa bài tập.']]
];
for (const [i, [title, items]] of lessons.entries()) {
 const detail = document.createElement('details'); detail.className = 'lesson'; detail.open = i === 0;
 const summary = document.createElement('summary');
 const number = document.createElement('span'); number.className = 'lesson-number'; number.textContent = String(i + 1).padStart(2, '0');
 const heading = document.createElement('span'); heading.className = 'lesson-title'; heading.textContent = title;
 const plus = document.createElement('span'); plus.className = 'expand'; plus.setAttribute('aria-hidden','true'); plus.textContent = '+';
 summary.append(number, heading, plus); const list = document.createElement('ul');
 for (const item of items) { const li = document.createElement('li'); li.textContent = item; list.append(li); }
 detail.append(summary, list);
 if (i >= 1 && i <= 3) {
  const visual = document.createElement('section'); visual.className = 'lesson-visual'; visual.setAttribute('aria-label', i === 1 ? 'Minh họa bản vẽ 2D và mô hình 3D' : i === 2 ? 'Minh họa quản lý thông tin và cấu kiện trong Revit' : 'Minh họa Phasing và Design Options trong Revit');
  const visualHeading = document.createElement('h4'); visualHeading.textContent = i === 1 ? 'Từ bản vẽ 2D → Mô hình 3D' : i === 2 ? 'Hiểu thông tin. Quản lý mô hình.' : 'Theo dõi giai đoạn. So sánh phương án.';
  const visualIntro = document.createElement('p'); visualIntro.textContent = i === 1 ? 'Minh họa cách đọc bản vẽ và hình dung các cấu kiện trong không gian.' : i === 2 ? 'Minh họa Project Parameters và cách thể hiện cấu kiện khung tường trong mô hình Revit.' : 'Hình dung sự thay đổi từ hiện trạng đến hoàn thiện và đối chiếu các phương án thiết kế trong Revit.';
  const gallery = document.createElement('div'); gallery.className = i >= 2 ? 'lesson-gallery lesson-gallery-wide' : 'lesson-gallery';
  const photos = i === 1 ? [
   { src: 'assets/lesson-02-plan.png', title: '01 / Bản vẽ mặt bằng 2D', alt: 'Bản vẽ mặt bằng 2D với bố trí phòng, kích thước và ghi chú kỹ thuật', width: 1185, height: 1478 },
   { src: 'assets/lesson-02-model.png', title: '02 / Mô hình cấu tạo 3D', alt: 'Mô hình 3D tách lớp mái, tầng trên, kết cấu sàn và tầng trệt của nhà hai tầng', width: 1251, height: 1122 }
  ] : i === 2 ? [
   { src: 'assets/lesson-03-parameters.png', title: '01 / Project Parameters trong Revit', alt: 'Infographic về Project Parameters: tạo và quản lý thuộc tính, ví dụ tham số cửa và ứng dụng dữ liệu trong Revit', width: 1300, height: 866 },
   { src: 'assets/lesson-03-framing.png', title: '02 / Cấu kiện khung tường trong mô hình', alt: 'Mô hình Revit với khung tường được tô vàng, góc nhìn 3D toàn công trình, tách cấu kiện và mặt đứng có kích thước', width: 2134, height: 1328 }
  ] : [
   { src: 'assets/lesson-04-phasing.png', title: '01 / Phasing: Hiện trạng → Hoàn thiện', alt: 'Hai góc nhìn 3D công trình so sánh giai đoạn hiện trạng và hoàn thiện', width: 2773, height: 1050 },
   { src: 'assets/lesson-04-design-options.png', title: '02 / Design Options: So sánh phương án thiết kế', alt: 'Mô hình nhà hai tầng đối chiếu Option 01 và Option 02 với các phương án mái khác nhau', width: 2757, height: 1030 }
  ];
  for (const photo of photos) {
   const figure = document.createElement('figure');
   const link = document.createElement('a'); link.href = photo.src; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', `${photo.title} — mở ảnh kích thước đầy đủ trong tab mới`);
   const img = document.createElement('img'); img.src = photo.src; img.alt = photo.alt; img.width = photo.width; img.height = photo.height; img.loading = 'lazy';
   const caption = document.createElement('figcaption'); caption.textContent = photo.title;
   const hint = document.createElement('span'); hint.className = 'image-open-hint'; hint.textContent = 'Xem ảnh lớn ↗';
   link.append(img, hint); figure.append(link, caption); gallery.append(figure);
  }
  visual.append(visualHeading, visualIntro, gallery); detail.append(visual);
 }
 if (i === 5 || i === 6) {
  const visual = document.createElement('section'); visual.className = 'lesson-visual';
  const visualHeading = document.createElement('h4'); visualHeading.textContent = i === 5 ? 'AI Toolbox: Công cụ hỗ trợ công việc kỹ sư' : 'Web App: Quản lý công cụ và dữ liệu';
  const intro = document.createElement('p'); intro.textContent = i === 5 ? 'Giao diện minh họa các công cụ tự động hóa cho bản vẽ, kết cấu và dự toán.' : 'Giao diện minh họa tải lên, kiểm tra, quản lý phiên bản và trạng thái hiển thị của công cụ trên Web App.';
  const gallery = document.createElement('div'); gallery.className = 'lesson-gallery lesson-gallery-wide';
  const figure = document.createElement('figure');
  const link = document.createElement('a'); link.href = i === 5 ? 'assets/lesson-06-ai-toolbox.png' : 'assets/lesson-07-tool-management.png'; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.setAttribute('aria-label', `${visualHeading.textContent} — mở ảnh kích thước đầy đủ trong tab mới`);
  const img = document.createElement('img'); img.src = link.getAttribute('href'); img.alt = i === 5 ? 'Ảnh giao diện AI Toolbox cho kỹ sư với danh sách công cụ xử lý bản vẽ CAD, PDF và dự toán' : 'Ảnh giao diện quản lý tool: tải gói công cụ, kiểm tra, quản lý phiên bản, ẩn và xóa công cụ'; img.width = i === 5 ? 1837 : 1838; img.height = i === 5 ? 1307 : 1285; img.loading = 'lazy';
  const hint = document.createElement('span'); hint.className = 'image-open-hint'; hint.textContent = 'Xem ảnh lớn ↗';
  const caption = document.createElement('figcaption'); caption.textContent = i === 5 ? 'Minh họa / Kho công cụ AI Toolbox cho kỹ sư' : 'Minh họa / Trang quản lý công cụ trên Web App';
  link.append(img, hint); figure.append(link, caption); gallery.append(figure); visual.append(visualHeading, intro, gallery); detail.append(visual);
 }
 if (i === 7) {
  const visual = document.createElement('section'); visual.className = 'lesson-visual'; visual.setAttribute('aria-label', 'Video mô phỏng thi công bằng Blender');
  const videoHeading = document.createElement('h4'); videoHeading.textContent = 'Trực quan hóa trình tự thi công';
  const intro = document.createElement('p'); intro.textContent = 'Video minh họa mô phỏng quá trình xây dựng trong nội dung Blender. Bấm phát để xem, hoặc mở toàn màn hình để theo dõi chi tiết.';
  const video = document.createElement('video'); video.className = 'lesson-video'; video.controls = true; video.playsInline = true; video.preload = 'none'; video.poster = 'assets/construction-animation-poster.jpg'; video.width = 2194; video.height = 956; video.setAttribute('aria-label', 'Construction animation — mô phỏng quá trình xây dựng, 3 phút 06 giây');
  const source = document.createElement('source'); source.src = 'assets/construction-animation.mp4'; source.type = 'video/mp4'; video.append(source);
  const fallback = document.createElement('a'); fallback.href = source.src; fallback.textContent = 'Mở video mô phỏng thi công'; video.append(fallback);
  const download = document.createElement('a'); download.className = 'video-download'; download.href = source.src; download.target = '_blank'; download.rel = 'noopener noreferrer'; download.textContent = 'Mở video trong tab mới ↗';
  visual.append(videoHeading, intro, video, download); detail.append(visual);
  detail.addEventListener('toggle', () => { if (!detail.open) video.pause(); });
 }
 document.querySelector('#lessons').append(detail);
}
const menu = document.querySelector('.menu'); const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));
document.querySelectorAll('[data-format]').forEach(a => a.addEventListener('click', () => { document.querySelector('#interest').value = a.dataset.format; updateWhatsApp(); }));
document.querySelector('#year').textContent = new Date().getFullYear();
const contact = document.querySelector('#contact-action');
const contactLinks = [
 { label: 'WhatsApp: 0433 871 998 ↗', href: 'https://wa.me/61433871998', external: true, whatsapp: true },
 { label: 'Facebook TCA Group ↗', href: 'https://www.facebook.com/profile.php?id=61572352225648', external: true }
];
for (const item of contactLinks) {
 const link = document.createElement('a'); link.textContent = item.label; link.href = item.href;
 if (item.whatsapp) link.id = 'whatsapp-contact';
 if (item.external) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
 contact.append(link);
}
const contactHint = document.createElement('p');
contactHint.textContent = 'Nhắn qua WhatsApp với nội dung tư vấn có sẵn, hoặc sao chép nội dung và gửi qua Facebook của TCA Group.';
contact.append(contactHint);
function consultationMessage() {
 if (document.querySelector('#interest').value === 'Nâng cấp tư duy dự toán — 2 buổi / $400') {
  return 'Xin chào TCA Group, tôi quan tâm chương trình Nâng cấp tư duy dự toán — 2 buổi / $400, tư vấn trực tiếp cùng Senior Estimator. Tôi muốn được định hướng cải thiện công việc, nâng cao năng lực và trao đổi về mục tiêu phát triển nghề nghiệp. Nhờ TCA tư vấn lịch học và cách đăng ký. Cảm ơn TCA!';
 }
 return `Xin chào TCA Group, tôi muốn tìm hiểu khóa Revit ứng dụng & dự toán xây dựng tại Úc. Hình thức quan tâm: ${document.querySelector('#interest').value}. Nhờ TCA tư vấn lộ trình, lịch học và học phí. Cảm ơn TCA!`;
}
function updateWhatsApp() {
 document.querySelector('#whatsapp-contact').href = `https://wa.me/61433871998?text=${encodeURIComponent(consultationMessage())}`;
}
document.querySelector('#interest').addEventListener('change', updateWhatsApp);
updateWhatsApp();
document.querySelector('#copy-request').addEventListener('click', async () => {
 const content = consultationMessage();
 const status = document.querySelector('#copy-status');
 try { await navigator.clipboard.writeText(content); status.textContent = 'Đã sao chép nội dung. Chưa có thông tin nào được gửi đi.'; }
 catch { status.textContent = content; }
});
