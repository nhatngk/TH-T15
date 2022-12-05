const { db } = require('../model/index');

const studentCtrl = {
    async getAll(req, res) {
        try {
            const students = await db.sinhvien.findAll();
            res.status(200).json(students);
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    async getById(req, res) {
        try {
            const student = await db.sinhvien.findOne({
                where: {
                    masv: req.params.id
                }
            });
            if (!student) return res.status(404).json({ msg: "Id does not exist!" })
            return res.status(200).json(student);
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    async addById(req, res) {
        try {
            const { masv, hoten, ngaysinh, gioitinh, quequan, malop } = req.body;
            const check = masv === req.params.id;
            if (!check) return res.status(400).json({ msg: "Malformed request syntax" });
            const isExisting = await db.sinhvien.findOne({
                where: {
                    masv
                }
            });
            if (isExisting) return res.status(409).json({ msg: "Id already exist " });
            if (!hoten) return res.status(400).json({ msg: "Malformed request syntax" });
            await db.sinhvien.create({
                masv,
                hoten,
                ngaysinh,
                gioitinh,
                quequan,
                malop
            })
            return res.status(201).json({ msg: "Successfully created" })
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    async deleteById(req, res) {
        try {
            const student = await db.sinhvien.findOne({
                where: {
                    masv: req.params.id
                }
            });

            if (!student) return res.status(404).json({ msg: "Id does not exist!" });

            await db.sinhvien.destroy({
                where: {
                    masv: req.params.id
                }
            });

            return res.status(204).json();
        } catch (error) {
            res.status(500).json({ error });
        }
    },

    async updateById(req, res) {
        try {
            const { masv, hoten, ngaysinh, gioitinh, quequan, malop } = req.body;
            if (!masv || !hoten) return res.status(400).json({ msg: "Malformed request syntax"});
            const isExisting = await db.sinhvien.findOne({
                where: {
                    masv: req.params.id
                }
            });
            if (!isExisting) return res.status(409).json({ msg: "Id does not exist"});

            const check = await db.sinhvien.findOne({
                where: {
                    masv
                }
            });

            if (check) return res.status(409).json({ msg: "Updated id already exists"});

            await db.sinhvien.update(
                {
                    masv, hoten, ngaysinh, gioitinh, quequan, malop
                },
                {
                    where: {
                        masv: req.params.id
                    }
                })
            return res.status(200).json({ msg: "Successfully updated" })
        } catch (error) {
            res.status(500).json({ error });
        }
    },
}

module.exports = studentCtrl;