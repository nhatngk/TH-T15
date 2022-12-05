SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";



CREATE TABLE `sinhvien` (
  `masv` varchar(20) COLLATE utf8_bin NOT NULL,
  `hoten` varchar(200) COLLATE utf8_bin NOT NULL,
  `ngaysinh` date DEFAULT NULL,
  `gioitinh` tinyint(4) DEFAULT NULL,
  `quequan` varchar(300) COLLATE utf8_bin DEFAULT NULL,
  `malop` varchar(10) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

INSERT INTO `sinhvien` (`masv`, `hoten`, `ngaysinh`, `gioitinh`, `quequan`, `malop`) VALUES
('2002001', 'Nguyễn Văn A', '2002-02-20', 1, 'Thái Bình', 'QH-2020/CQ-C'),
('1902002', 'Nguyễn Thị B', '2001-02-22', 0, 'Nam Định', 'QH-2019/CQ-C'),
('2002003', 'Lê Văn C', '2002-02-22', 1, 'Ninh Bình', 'QH-2020/CQ-K'),
('2002004', 'Trần Minh D', '2001-02-22', 1, 'Bắc Giang', 'QH-2020/CQ-C'),
('1803005', 'Trần Văn C', '1999-10-23', 1, 'Thanh Hóa', 'QH-2018/CQ-C'),
('2002006', 'Phạm Văn A', '2001-02-20', 1, 'Hải Phòng', 'QH-2020/CQ-C'),
('1901007', 'Hoàng Thị B' , '2000-02-01', 0, 'Lạng Sơn', 'QH-2019/CQ-C'),
('2002008', 'Đặng Thị E', '2002-02-17', 0, 'Cao Bằng', 'QH-2020/CQ-C');

ALTER TABLE `sinhvien`
  ADD PRIMARY KEY (`masv`);

