# EXCERCISE REACT STATE PROPS CHOOSE GLASSES

Đây là một ứng dụng ReactJS để thực hiện việc thay đổi kính trên hình ảnh người mẫu.

## Authors

- [@nvthanh-fedev](https://github.com/nvthanh-fedev)

## Documentation

[Vitejs Getting Started](https://vitejs.dev/guide/)

## Features

- Component ButtonGlasses: Đây là một nút chọn kính, khi người dùng nhấp vào nó, nút này sẽ trở thành nút được chọn. Component này nhận ba thuộc tính là prod (đại diện cho thông tin kính), active (đại diện cho trạng thái của nút) và onClick (hàm được gọi khi người dùng nhấp vào nút).
- Component ListButtonsGlasses: Đây là một danh sách các nút chọn kính. Component này tạo ra danh sách các nút chọn kính bằng cách sử dụng component ButtonGlasses và hiển thị chúng theo hướng dọc. Nó cũng nhận một hàm callback onButtonChange để truyền giá trị của kính đã chọn lên component cha.
- Component CardPerson: Đây là thành phần hiển thị hình ảnh người mẫu và kính đã chọn. Nó nhận các thuộc tính là hình ảnh của người mẫu, tiêu đề, nội dung và hình ảnh của kính. Hình ảnh của kính sẽ được hiển thị trên hình ảnh của người mẫu.
- Component DemoGlasses: Đây là component chính của ứng dụng. Nó chứa các thành phần ButtonListGlasses và CardPerson. Nó cũng có một state để lưu trữ thông tin về kính được chọn và truyền giá trị của kính đã chọn từ ListButtonsGlasses lên CardPerson bằng cách sử dụng hàm callback onButtonChange. Khi kính được chọn, DemoGlasses sẽ cập nhật lại state và truyền thông tin mới đó vào CardPerson để hiển thị kính mới được chọn.
