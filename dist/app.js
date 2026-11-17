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
 detail.append(summary, list); document.querySelector('#lessons').append(detail);
}
const menu = document.querySelector('.menu'); const nav = document.querySelector('nav');
menu.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('open', open); });
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); }));
document.querySelectorAll('[data-format]').forEach(a => a.addEventListener('click', () => { document.querySelector('#interest').value = a.dataset.format; }));
document.querySelector('#year').textContent = new Date().getFullYear();
const contact = document.querySelector('#contact-action');
const contactLinks = [
 { label: 'Gọi TCA: 0433 871 998', href: 'tel:+61433871998' },
 { label: 'Facebook TCA Group ↗', href: 'https://www.facebook.com/profile.php?id=61572352225648', external: true }
];
for (const item of contactLinks) {
 const link = document.createElement('a'); link.textContent = item.label; link.href = item.href;
 if (item.external) { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
 contact.append(link);
}
const contactHint = document.createElement('p');
contactHint.textContent = 'Gọi trực tiếp hoặc sao chép nội dung tư vấn và gửi qua Facebook của TCA Group.';
contact.append(contactHint);
document.querySelector('#copy-request').addEventListener('click', async () => {
 const content = `Xin chào TCA Group, tôi muốn tìm hiểu khóa Revit ứng dụng & dự toán xây dựng tại Úc. Hình thức quan tâm: ${document.querySelector('#interest').value}. Nhờ TCA tư vấn lộ trình, lịch học và học phí. Cảm ơn TCA!`;
 const status = document.querySelector('#copy-status');
 try { await navigator.clipboard.writeText(content); status.textContent = 'Đã sao chép nội dung. Chưa có thông tin nào được gửi đi.'; }
 catch { status.textContent = content; }
});
