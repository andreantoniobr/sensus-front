import { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventInput, DateSelectArg, EventClickArg } from "@fullcalendar/core";
import { Modal } from "../components/ui/modal";
import { useModal } from "../hooks/useModal";
import PageMeta from "../components/common/PageMeta";

interface CalendarEvent extends EventInput {
  extendedProps: {
    calendar: string;
  };
}

const CalendarPage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [eventTitle, setEventTitle] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventLevel, setEventLevel] = useState("");
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const calendarRef = useRef<FullCalendar>(null);
  const { isOpen, openModal, closeModal } = useModal();

  // Categorias acadêmicas
  const calendarsEvents = {
    Prova: "danger",
    Trabalho: "primary",
    Seminario: "warning",
    Atividade: "success",
  };

  useEffect(() => {
    setEvents([
      {
        id: "1",
        title: "Prova de Matemática",
        start: new Date().toISOString().split("T")[0],
        extendedProps: { calendar: "Prova" },
      },
      {
        id: "2",
        title: "Entrega de Trabalho de História",
        start: new Date(Date.now() + 86400000).toISOString().split("T")[0],
        extendedProps: { calendar: "Trabalho" },
      },
      {
        id: "3",
        title: "Seminário de Biologia",
        start: new Date(Date.now() + 172800000).toISOString().split("T")[0],
        end: new Date(Date.now() + 259200000).toISOString().split("T")[0],
        extendedProps: { calendar: "Seminario" },
      },
    ]);
  }, []);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    resetModalFields();
    setEventStartDate(selectInfo.startStr);
    setEventEndDate(selectInfo.endStr || selectInfo.startStr);
    openModal();
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    const event = clickInfo.event;
    setSelectedEvent(event as unknown as CalendarEvent);
    setEventTitle(event.title);
    setEventStartDate(event.start?.toISOString().split("T")[0] || "");
    setEventEndDate(event.end?.toISOString().split("T")[0] || "");
    setEventLevel(event.extendedProps.calendar);
    openModal();
  };

  const handleAddOrUpdateEvent = () => {
    if (selectedEvent) {
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === selectedEvent.id
            ? {
                ...event,
                title: eventTitle,
                start: eventStartDate,
                end: eventEndDate,
                extendedProps: { calendar: eventLevel },
              }
            : event
        )
      );
    } else {
      const newEvent: CalendarEvent = {
        id: Date.now().toString(),
        title: eventTitle,
        start: eventStartDate,
        end: eventEndDate,
        allDay: true,
        extendedProps: { calendar: eventLevel },
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]);
    }
    closeModal();
    resetModalFields();
  };

  const resetModalFields = () => {
    setEventTitle("");
    setEventStartDate("");
    setEventEndDate("");
    setEventLevel("");
    setSelectedEvent(null);
  };

  return (
    <>
      <PageMeta
        title="Calendário Acadêmico | Sensus"
        description="Gerencie provas, trabalhos e atividades acadêmicas."
      />

      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="custom-calendar">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            locale="pt-br"
            headerToolbar={{
              left: "prev,next addEventButton",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            events={events}
            selectable={true}
            select={handleDateSelect}
            eventClick={handleEventClick}
            eventContent={renderEventContent}
            buttonText={{
              today: "Hoje",
              month: "Mês",
              week: "Semana",
              day: "Dia",
            }}
            customButtons={{
              addEventButton: {
                text: "Adicionar +",
                click: openModal,
              },
            }}
          />
        </div>

        <Modal
          isOpen={isOpen}
          onClose={closeModal}
          className="max-w-[700px] p-6 lg:p-10"
        >
          <div className="flex flex-col px-2 overflow-y-auto custom-scrollbar">
            <div>
              <h5 className="mb-2 font-semibold text-gray-800 text-xl dark:text-white/90 lg:text-2xl">
                {selectedEvent ? "Editar Evento" : "Novo Evento Acadêmico"}
              </h5>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cadastre provas, trabalhos e atividades para organizar sua rotina acadêmica.
              </p>
            </div>

            <div className="mt-8">
              <label className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                Título do Evento
              </label>
              <input
                type="text"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
                className="h-11 w-full rounded-lg border border-gray-300 px-4 text-sm"
              />

              <div className="mt-6">
                <label className="block mb-4 text-sm font-medium text-gray-700 dark:text-gray-400">
                  Tipo de Evento
                </label>

                <div className="flex flex-wrap gap-4">
                  {Object.keys(calendarsEvents).map((key) => (
                    <label key={key} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="event-level"
                        value={key}
                        checked={eventLevel === key}
                        onChange={() => setEventLevel(key)}
                      />
                      {key}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <label className="text-sm">Data de Início</label>
                <input
                  type="date"
                  value={eventStartDate}
                  onChange={(e) => setEventStartDate(e.target.value)}
                  className="h-11 w-full rounded-lg border px-4 text-sm"
                />
              </div>

              <div className="mt-6">
                <label className="text-sm">Data de Término</label>
                <input
                  type="date"
                  value={eventEndDate}
                  onChange={(e) => setEventEndDate(e.target.value)}
                  className="h-11 w-full rounded-lg border px-4 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6 sm:justify-end">
              <button
                onClick={closeModal}
                className="rounded-lg border px-4 py-2 text-sm"
              >
                Cancelar
              </button>

              <button
                onClick={handleAddOrUpdateEvent}
                className="rounded-lg bg-brand-500 px-4 py-2 text-sm text-white"
              >
                {selectedEvent ? "Salvar Alterações" : "Adicionar Evento"}
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

const renderEventContent = (eventInfo: any) => {
  const colorClass = `fc-bg-${eventInfo.event.extendedProps.calendar.toLowerCase()}`;
  return (
    <div className={`flex ${colorClass} p-1 rounded`}>
      <span className="mr-1">{eventInfo.timeText}</span>
      <span>{eventInfo.event.title}</span>
    </div>
  );
};

export default CalendarPage;