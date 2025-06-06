import React, { useState } from 'react';
import Navv from './Navv';
import styles from '../Reportes.module.css';

function Reportes() {
  const [name, setName] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [reports, setReports] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const finalName = isAnonymous || !name.trim() ? 'Anónimo' : name.trim();

    if (category === '' || description.trim() === '') {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    const newReport = {
      name: finalName,
      category,
      description: description.trim(),
      status: 'Pendiente'
    };

    setReports([...reports, newReport]);

    // Limpiar el formulario
    setName('');
    setIsAnonymous(false);
    setCategory('');
    setDescription('');
  };

  return (
    <div className={styles.body}>
      <Navv />
      <div className={styles.container}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="24" height="24" stroke-width="2"> <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z"></path> <path d="M12 8v3"></path> <path d="M12 14v.01"></path> </svg> 
        <h2 className={styles.heading}>Reportar una Incidencia</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
          className={styles.name}
            type="text"
            placeholder="Tu nombre (opcional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={styles.container_ch}>
            <input
                className={styles.anon}
              type="checkbox"
              id="anonymous"
              checked={isAnonymous}
              onChange={(e) => setIsAnonymous(e.target.checked)}
            />
            <label htmlFor="anonymous"> Reportar de forma anónima</label>
          </div>

          <select
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Servicios Públicos">Servicios Públicos</option>
            <option value="Áreas Comunes">Áreas Comunes</option>
            <option value="Vecinos">Vecinos</option>
          </select>

          <textarea
            placeholder="Describe la incidencia..."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className={styles.textarea}
          ></textarea>

          <button type="submit" className={styles.button}>
            Enviar Reporte
          </button>
        </form>
        <div className={styles.containerR}>
        <h2 className={styles.heading}>Reportes Enviados</h2>
        <ul className={styles.reportList}>
          {reports.map((report, index) => (
            <li key={index} className={styles.reportItem}>
              <p><strong>Reportado por:</strong> {report.name}</p>
              <p><strong>Categoría:</strong> {report.category}</p>
              <p><strong>Descripción:</strong> {report.description}</p>
              <p><strong>Estado:</strong> {report.status}</p>
            </li>
          ))}
        </ul>
        </div>
       
      </div>
    </div>
  );
}

export default Reportes;
