const { Ciclo, CicloSchema } = require('./ciclo');
const { Domicilio, DomicilioSchema } = require('./domicilio');
const { Diligencia, DiligenciaSchema } = require('./diligencia');
const { Estado, EstadoSchema } = require('./estado');
const { EstatusSolicitud, EstatusSolicitudSchema } = require('./estatusSolicitud');
const { File, FileSchema } = require('./file');
const { Institucion, InstitucionSchema } = require('./institucion');
const { Modalidad, ModalidadSchema } = require('./modalidad');
const { Municipio, MunicipioSchema } = require('./municipio');
const { Nivel, NivelSchema } = require('./nivel');
const { Pais, PaisSchema } = require('./pais');
const { Persona, PersonaSchema } = require('./persona');
const { Plantel, PlantelSchema } = require('./plantel');
const { Programa, ProgramaSchema } = require('./programa');
const { Turno, TurnoSchema } = require('./turno');
const { ProgramaTurno, ProgramaTurnoSchema } = require('./programaTurno');
const { RatificacionNombre, RatificacionNombreSchema } = require('./ratificacionNombre');
const { Representante, RepresentanteSchema } = require('./representante');
const { Rol, RolSchema } = require('./rol');
const { Solicitud, SolicitudSchema } = require('./solicitud');
const { TipoInmueble, TipoInmuebleSchema } = require('./tipoInmueble');
const { TipoSolicitud, TipoSolicitudSchema } = require('./tipoSolicitud');
const { Usuario, UsuarioSchema } = require('./usuario');
const { UsuarioUsuario, UsuarioUsuarioSchema } = require('./usuarioUsuario');
const { Rector, RectorSchema } = require('./rector');
const { Director, DirectorSchema } = require('./director');
const { TipoInstalacion, TipoInstalacionSchema } = require('./tipoInstalacion');
const { Docente, DocenteSchema } = require('./docente');
const { Asignatura, AsignaturaSchema } = require('./asignatura');
const { AsignaturaDocente, AsignaturaDocenteSchema } = require('./asignaturaDocente');
const { Seccion, SeccionSchema } = require('./seccion');
const { SolicitudSeccion, SolicitudSeccionSchema } = require('./solicitudSeccion');
const { Higiene, HigieneSchema } = require('./higiene');
const { PlantelHigiene, PlantelHigieneSchema } = require('./plantelHigiene');
const { Infraestructura, InfraestructuraSchema } = require('./infraestructura');
const { InfraestructuraPrograma, InfraestructuraProgramaSchema } = require('./infraestructuraPrograma');
const { AsignaturaInfraestructura, AsignaturaInfraestructuraSchema } = require('./asignaturaInfraestructura');
const { EstatusInspeccion, EstatusInspeccionSchema } = require('./estatusInspeccion');
const { InspeccionApartado, InspeccionApartadoSchema } = require('./inspeccionApartado');
const { InspeccionCategoria, InspeccionCategoriaSchema } = require('./inspeccionCategoria');
const { InspeccionTipoPregunta, InspeccionTipoPreguntaSchema } = require('./inspeccionTipoPregunta');
const { InspeccionObservacion, InspeccionObservacionSchema } = require('./inspeccionObservacion');
const { InspeccionPregunta, InspeccionPreguntaSchema } = require('./inspeccionPregunta');
const { Inspeccion, InspeccionSchema } = require('./inspeccion');
const { InspeccionInspeccionPregunta, InspeccionInspeccionPreguntaSchema } = require('./inspeccionInspeccionPregunta');
const { Inspector, InspectorSchema } = require('./inspector');
const { InspectorPrograma, InspectorProgramaSchema } = require('./inspectorPrograma');
const { Notificacion, NotificacionSchema } = require('./notificacion');
const { Trayectoria, TrayectoriaSchema } = require('./trayectoria');
const { Situacion, SituacionSchema } = require('./situacion');
const { TipoTramite, TipoTramiteSchema } = require('./tipoTramite');
const { Alumno, AlumnoSchema } = require('./alumno');
const { AlumnoTipoTramite, AlumnoTipoTramiteSchema } = require('./alumnoTipoTramite');
const { EdificioNivel, EdificioNivelSchema } = require('./edificioNivel');
const { PlantelEdificioNivel, PlantelEdificioNivelSchema } = require('./plantelEdificioNivel');
const { SaludInstitucion, SaludInstitucionSchema } = require('./saludInstitucion');
const { SeguridadSistema, SeguridadSistemaSchema } = require('./seguridadSistema');
const { PlantelSeguridadSistema, PlantelSeguridadSistemaSchema } = require('./plantelSeguridadSistema');
const { Cumplimiento, CumplimientoSchema } = require('./cumplimiento');
const { Evaluacion, EvaluacionSchema } = require('./evaluacion');
const { Evaluador, EvaluadorSchema } = require('./evaluador');

function setupModels(sequelize) {
  // Initialize models
  Ciclo.init(CicloSchema, Ciclo.config(sequelize));
  Domicilio.init(DomicilioSchema, Domicilio.config(sequelize));
  Diligencia.init(DiligenciaSchema, Diligencia.config(sequelize));
  Estado.init(EstadoSchema, Estado.config(sequelize));
  EstatusSolicitud.init(EstatusSolicitudSchema, EstatusSolicitud.config(sequelize));
  File.init(FileSchema, File.config(sequelize));
  Institucion.init(InstitucionSchema, Institucion.config(sequelize));
  Modalidad.init(ModalidadSchema, Modalidad.config(sequelize));
  Municipio.init(MunicipioSchema, Municipio.config(sequelize));
  Nivel.init(NivelSchema, Nivel.config(sequelize));
  Pais.init(PaisSchema, Pais.config(sequelize));
  Persona.init(PersonaSchema, Persona.config(sequelize));
  Plantel.init(PlantelSchema, Plantel.config(sequelize));
  Turno.init(TurnoSchema, Turno.config(sequelize));
  Programa.init(ProgramaSchema, Programa.config(sequelize));
  ProgramaTurno.init(ProgramaTurnoSchema, ProgramaTurno.config(sequelize));
  RatificacionNombre.init(RatificacionNombreSchema, RatificacionNombre.config(sequelize));
  Representante.init(RepresentanteSchema, Representante.config(sequelize));
  Rol.init(RolSchema, Rol.config(sequelize));
  Solicitud.init(SolicitudSchema, Solicitud.config(sequelize));
  TipoInmueble.init(TipoInmuebleSchema, TipoInmueble.config(sequelize));
  TipoSolicitud.init(TipoSolicitudSchema, TipoSolicitud.config(sequelize));
  Usuario.init(UsuarioSchema, Usuario.config(sequelize));
  UsuarioUsuario.init(UsuarioUsuarioSchema, UsuarioUsuario.config(sequelize));
  Rector.init(RectorSchema, Rector.config(sequelize));
  Director.init(DirectorSchema, Director.config(sequelize));
  TipoInstalacion.init(TipoInstalacionSchema, TipoInstalacion.config(sequelize));
  Docente.init(DocenteSchema, Docente.config(sequelize));
  Asignatura.init(AsignaturaSchema, Asignatura.config(sequelize));
  AsignaturaDocente.init(AsignaturaDocenteSchema, AsignaturaDocente.config(sequelize));
  Seccion.init(SeccionSchema, Seccion.config(sequelize));
  SolicitudSeccion.init(SolicitudSeccionSchema, SolicitudSeccion.config(sequelize));
  Higiene.init(HigieneSchema, Higiene.config(sequelize));
  PlantelHigiene.init(PlantelHigieneSchema, PlantelHigiene.config(sequelize));
  Infraestructura.init(InfraestructuraSchema, Infraestructura.config(sequelize));
  InfraestructuraPrograma.init(
    InfraestructuraProgramaSchema,
    InfraestructuraPrograma.config(sequelize),
  );
  AsignaturaInfraestructura.init(
    AsignaturaInfraestructuraSchema,
    AsignaturaInfraestructura.config(sequelize),
  );
  EstatusInspeccion.init(EstatusInspeccionSchema, EstatusInspeccion.config(sequelize));
  InspeccionApartado.init(InspeccionApartadoSchema, InspeccionApartado.config(sequelize));
  InspeccionCategoria.init(InspeccionCategoriaSchema, InspeccionCategoria.config(sequelize));
  InspeccionTipoPregunta.init(
    InspeccionTipoPreguntaSchema,
    InspeccionTipoPregunta.config(sequelize),
  );
  InspeccionPregunta.init(InspeccionPreguntaSchema, InspeccionPregunta.config(sequelize));
  Inspeccion.init(InspeccionSchema, Inspeccion.config(sequelize));
  InspeccionObservacion.init(InspeccionObservacionSchema, InspeccionObservacion.config(sequelize));
  InspeccionInspeccionPregunta.init(
    InspeccionInspeccionPreguntaSchema,
    InspeccionInspeccionPregunta.config(sequelize),
  );
  Inspector.init(InspectorSchema, Inspector.config(sequelize));
  InspectorPrograma.init(InspectorProgramaSchema, InspectorPrograma.config(sequelize));
  Notificacion.init(NotificacionSchema, Notificacion.config(sequelize));
  Trayectoria.init(TrayectoriaSchema, Trayectoria.config(sequelize));
  Situacion.init(SituacionSchema, Situacion.config(sequelize));
  TipoTramite.init(TipoTramiteSchema, TipoTramite.config(sequelize));
  Alumno.init(AlumnoSchema, Alumno.config(sequelize));
  AlumnoTipoTramite.init(AlumnoTipoTramiteSchema, AlumnoTipoTramite.config(sequelize));
  EdificioNivel.init(EdificioNivelSchema, EdificioNivel.config(sequelize));
  PlantelEdificioNivel.init(PlantelEdificioNivelSchema, PlantelEdificioNivel.config(sequelize));
  SaludInstitucion.init(SaludInstitucionSchema, SaludInstitucion.config(sequelize));
  SeguridadSistema.init(SeguridadSistemaSchema, SeguridadSistema.config(sequelize));
  PlantelSeguridadSistema.init(
    PlantelSeguridadSistemaSchema,
    PlantelSeguridadSistema.config(sequelize),
  );
  Cumplimiento.init(CumplimientoSchema, Cumplimiento.config(sequelize));
  Evaluacion.init(EvaluacionSchema, Evaluacion.config(sequelize));
  Evaluador.init(EvaluadorSchema, Evaluador.config(sequelize));

  // Associations
  Ciclo.associate(sequelize.models);
  Domicilio.associate(sequelize.models);
  Diligencia.associate(sequelize.models);
  Estado.associate(sequelize.models);
  EstatusSolicitud.associate(sequelize.models);
  File.associate(sequelize.models);
  Institucion.associate(sequelize.models);
  Municipio.associate(sequelize.models);
  Modalidad.associate(sequelize.models);
  Nivel.associate(sequelize.models);
  Pais.associate(sequelize.models);
  Persona.associate(sequelize.models);
  Plantel.associate(sequelize.models);
  Turno.associate(sequelize.models);
  Programa.associate(sequelize.models);
  ProgramaTurno.associate(sequelize.models);
  RatificacionNombre.associate(sequelize.models);
  Representante.associate(sequelize.models);
  Rol.associate(sequelize.models);
  TipoInmueble.associate(sequelize.models);
  TipoSolicitud.associate(sequelize.models);
  Solicitud.associate(sequelize.models);
  Usuario.associate(sequelize.models);
  UsuarioUsuario.associate(sequelize.models);
  Rector.associate(sequelize.models);
  Director.associate(sequelize.models);
  TipoInstalacion.associate(sequelize.models);
  Docente.associate(sequelize.models);
  Asignatura.associate(sequelize.models);
  AsignaturaDocente.associate(sequelize.models);
  Seccion.associate(sequelize.models);
  SolicitudSeccion.associate(sequelize.models);
  Higiene.associate(sequelize.models);
  PlantelHigiene.associate(sequelize.models);
  Infraestructura.associate(sequelize.models);
  InfraestructuraPrograma.associate(sequelize.models);
  AsignaturaInfraestructura.associate(sequelize.models);
  EstatusInspeccion.associate(sequelize.models);
  InspeccionApartado.associate(sequelize.models);
  InspeccionCategoria.associate(sequelize.models);
  InspeccionTipoPregunta.associate(sequelize.models);
  InspeccionPregunta.associate(sequelize.models);
  Inspeccion.associate(sequelize.models);
  InspeccionObservacion.associate(sequelize.models);
  InspeccionInspeccionPregunta.associate(sequelize.models);
  Inspector.associate(sequelize.models);
  InspectorPrograma.associate(sequelize.models);
  Notificacion.associate(sequelize.models);
  Trayectoria.associate(sequelize.models);
  Situacion.associate(sequelize.models);
  TipoTramite.associate(sequelize.models);
  Alumno.associate(sequelize.models);
  AlumnoTipoTramite.associate(sequelize.models);
  EdificioNivel.associate(sequelize.models);
  PlantelEdificioNivel.associate(sequelize.models);
  SaludInstitucion.associate(sequelize.models);
  SeguridadSistema.associate(sequelize.models);
  PlantelSeguridadSistema.associate(sequelize.models);
  Cumplimiento.associate(sequelize.models);
  Evaluacion.associate(sequelize.models);
  Evaluador.associate(sequelize.models);
}

module.exports = setupModels;
