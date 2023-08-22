import {} from 'react'

const Footer = () => {
  return (
    <div className="pt-20 pb-10 mt-24 border-t-2">
      <footer className="grid grid-cols-4 gap-x-10">
        <div>
          <img src="iconpagemovie.svg" alt="" />
          <div className="mt-10">
            <p>
              <b className="text-primary">Phimmoi</b> - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với đa
              dạng các đầu phim và thể loại vô cùng phong phú.
            </p>
          </div>
        </div>
        <div className="pl-[100px] text-left">
          <div className="mb-5">Phim mới</div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="#" className="text-primary">
                Phim khoa học
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim kinh dị
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim hình sự
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim chiếu rạp
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim hành động
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-[100px] text-left">
          <div className="mb-5">Phim hay</div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="#" className="text-primary">
                Phim Âu Mỹ
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim Hàn Quốc
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim Trung Quốc
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim Nhật Bản
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Phim Thái Lan
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-[100px] text-left">
          <div className="mb-5">Thông tin</div>
          <ul className="flex flex-col gap-y-2">
            <li>
              <a href="#" className="text-primary">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Liên hệ chúng tôi
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Điều khoản sử dụng
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Chính sách riêng tư
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Khiếu nại bản quyền
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer
