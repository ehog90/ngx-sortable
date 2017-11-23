export interface SortablejsOptions {
  group?: any;
  sort?: boolean;
  delay?: number;
  disabled?: boolean;
  store?: {
    get: (sortable: any) => any[];
    set: (sortable: any) => any;
  };
  animation?: number;
  handle?: string;
  filter?: any;
  draggable?: string;
  ghostClass?: string;
  chosenClass?: string;
  dataIdAttr?: string;
  forceFallback?: boolean;
  fallbackClass?: string;
  fallbackOnBody?: boolean;
  scroll?: boolean;
  scrollSensitivity?: number;
  scrollSpeed?: number;
  preventOnFilter?: boolean;
  dragClass?: string;
  fallbackTolerance?: number;
  setData?: (dataTransfer: any, draggedElement: any) => any;
  onStart?: (event: any) => any;
  onEnd?: (event: any) => any;
  onAdd?: (event: any) => any;
  onUpdate?: (event: any) => any;
  onSort?: (event: any) => any;
  onRemove?: (event: any) => any;
  onFilter?: (event: any) => any;
  onMove?: (event: any) => boolean;
  scrollFn?: (offsetX: any, offsetY: any, originalEvent: any) => any;
  onChoose?: (event: any) => any;
  onClone?: (event: any) => any;
}
