import ColoredBtn from "../customButtons/ColoredBtn";
import OutlineBtn from "../customButtons/OutlineBtn";

const SimpleModal = ({state, toggleModal, modalTitle, children, cancelBtnText, confirmBtnText, onAdd, onCancel}) => {

  return (
    <>
      {state.showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-4 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl">
                    {modalTitle}
                  </h3>
                  <button
                    className=" ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => toggleModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-4 flex-auto bg-[#fafbfc]">
                  {children}
                </div>
                <div className="flex gap-2 items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                   
                    <OutlineBtn
                        text={cancelBtnText}
                        onClick={onCancel}
                        textColor='red-500'
                        borderColor='red-500'
                    />

                    <ColoredBtn
                        text={confirmBtnText}
                        onClick={onAdd}
                        textColor='text-white'
                        bgColor='bg-emerald-500'
                    />
                </div> 
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default SimpleModal