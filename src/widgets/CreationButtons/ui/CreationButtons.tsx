import { Button, ButtonKits } from "@/shared/ui/Button/Button";
import styles from "./CreationButtons.module.scss";
import { ActionAddField } from "@/pages/DynamicFormBuilder";
import { Fields } from "@/shared/types";

type Props = {
  onAddField: (payload: ActionAddField["payload"]) => void;
};

export function CreationButtons({ onAddField }: Props) {
  return (
    <section className={styles.section}>
      <Button
        kit={ButtonKits.DEFAULT}
        onClick={() => onAddField({ type: Fields.INPUT })}
      >
        Add Input
      </Button>
      <Button
        kit={ButtonKits.DEFAULT}
        onClick={() => onAddField({ type: Fields.CHECKBOX })}
      >
        Add Checkbox
      </Button>
      <Button
        kit={ButtonKits.DEFAULT}
        onClick={() => onAddField({ type: Fields.SELECT })}
      >
        Add Select
      </Button>
    </section>
  );
}
