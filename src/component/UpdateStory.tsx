"use client";

import { Button, Modal } from "@heroui/react";
import { BiRocket } from "react-icons/bi";

export function UpdateModal() {

    return (
        <div className="flex flex-wrap gap-4">
            <Modal>
                <Button variant="secondary">
                    Update
                </Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog className="sm:max-w-[360px]">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <BiRocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>
                                    Placement
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    This modal uses the placement option. Try different
                                    placements to see how the modal positions itself on the screen.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button className="w-full" slot="close">
                                    Continue
                                </Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
}