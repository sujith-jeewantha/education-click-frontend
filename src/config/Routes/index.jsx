import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from '../../components/molecules/NotFound'
import Home from '../../pages/Home';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Login from '../../pages/Login';
import Student from '../../pages/Login/Student'
import Teacher from '../../pages/Login/Teacher'
import Supervisor from '../../pages/Login/Supervisor'
import RegisterStudent from '../../pages/Register/RegisterStudent'
import RegisterTeacher from '../../pages/Register/RegisterTeacher'
import RegisterSupervisor from '../../pages/Register/RegisterSupervisor'

import Dashboard from '../../pages/Dashboard';
import {
  FormAddDataJabatan,
  FormEditDataJabatan,
  FormAddDataKehadiran,
  FormEditDataKehadiran,
  FormAddDataPegawai,
  FormEditDataPegawai,
  FormAddDataPotongan,
  FormEditDataPotongan,
  PrintPdfLaporanGaji,
  DetailDataGaji,
  PrintPdfSlipGaji,
  PrintPdfLaporanAbsensi,
  PrintPdfDataGajiPegawai
} from '../../components';
import {
  DataPegawai,
  DataJabatan,
  DataKehadiran,
  DataGaji,
  LaporanGaji,
  LaporanAbsensi,
  SlipGaji,
  UbahPasswordAdmin,
  DataGajiPegawai,
  UbahPasswordPegawai,
  DataPotongan
} from '../../pages'

const AppRoutes = () => {
  return (

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      {/* Login */}
      <Route path='/student' element={<Student />} />
      <Route path='/teacher' element={<Teacher />} />
      <Route path='/supervisor' element={<Supervisor />} />
      <Route path='/super-admin' element={<Login />} />

      {/* Register */}
      <Route path='/register-student' element={<RegisterStudent />} />
      <Route path='/register-teacher' element={<RegisterTeacher />} />
      <Route path='/register-supervisor' element={<RegisterSupervisor />} />

      <Route path='/dashboard' element={<Dashboard />} />

      {/* Route Admin */}
      {/* Master Data Admin */}
      <Route
        path='/data-pegawai'
        element={<DataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/add'
        element={<FormAddDataPegawai />}
      />
      <Route
        path='/data-pegawai/form-data-pegawai/edit/:id'
        element={<FormEditDataPegawai />}
      />
      <Route
        path='/data-jabatan'
        element={<DataJabatan />}
      />
      <Route
        path='/data-jabatan/form-data-jabatan/add'
        element={<FormAddDataJabatan />}
      />
      <Route
        path='/data-jabatan/form-data-jabatan/edit/:id'
        element={<FormEditDataJabatan />}
      />

      {/* Transaksi Admin */}
      <Route
        path='/data-kehadiran'
        element={<DataKehadiran />}
      />
      <Route
        path='/data-kehadiran/form-data-kehadiran/add'
        element={<FormAddDataKehadiran />}
      />
      <Route
        path='/data-kehadiran/form-data-kehadiran/edit/:id'
        element={<FormEditDataKehadiran />}
      />
      <Route
        path='/data-potongan'
        element={<DataPotongan />}
      />
      <Route
        path='/data-potongan/form-data-potongan/add'
        element={<FormAddDataPotongan />} />
      <Route
        path='/data-potongan/form-data-potongan/edit/:id'
        element={<FormEditDataPotongan />} />
      <Route
        path='/data-gaji'
        element={<DataGaji />}
      />
      <Route
        path='/data-gaji/detail-data-gaji/name/:name'
        element={<DetailDataGaji />}
      />
      <Route
        path='/data-gaji/cetak-gaji/slip-gaji/name/:name'
        element={<PrintPdfSlipGaji />}
      />

      {/* Laporan Admin */}
      <Route
        path='/laporan/gaji'
        element={<LaporanGaji />}
      />
      <Route
        path='/laporan/gaji/print-page'
        element={<PrintPdfLaporanGaji />}
      />
      <Route
        path='/laporan/absensi'
        element={<LaporanAbsensi />}
      />
      <Route
        path='/laporan/absensi/print-page'
        element={<PrintPdfLaporanAbsensi />}
      />
      <Route
        path='/laporan/slip-gaji'
        element={<SlipGaji />}
      />
      <Route
        path='/laporan/slip-gaji/print-page'
        element={<PrintPdfSlipGaji />}
      />

      {/* Pengaturan Admin */}
      <Route
        path='/ubah-password'
        element={<UbahPasswordAdmin />}
      />

      {/* Route Pegawai */}
      {/* Dashboard Data Gaji Pegawai */}
      <Route
        path='/data-gaji-pegawai'
        element={<DataGajiPegawai />}
      />
      <Route
        path='/data-gaji-pegawai/print-page'
        element={<PrintPdfDataGajiPegawai />}
      />
      <Route
        path='/ubah-password-pegawai'
        element={<UbahPasswordPegawai />}
      />

      {/* Route Not Found 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  )
}

export default AppRoutes;
