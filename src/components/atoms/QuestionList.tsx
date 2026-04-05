import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";
export interface QuestionItem {
  id: string;
  text: string;
  score: number;
}

interface QuestionListProps {
  items: QuestionItem[];
  onChange: (items: QuestionItem[]) => void;
}

export default function QuestionList({
  items,
  onChange,
}: QuestionListProps) {

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = items.findIndex(i => i.id === active.id);
      const newIndex = items.findIndex(i => i.id === over.id);

      const newItems = arrayMove(items, oldIndex, newIndex);
      onChange(newItems);
    }
  }

  function handleScoreChange(id: string, value: number) {
    const updated = items.map((item) =>
      item.id === id ? { ...item, score: value } : item
    );

    onChange(updated);
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map(i => i.id)}
        strategy={verticalListSortingStrategy}
      >
        {items.map((item, index) => (
          <SortableItem
            key={item.id}
            id={item.id}
            index={index}
            text={item.text}
            score={item.score}
            onScoreChange={handleScoreChange}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
}